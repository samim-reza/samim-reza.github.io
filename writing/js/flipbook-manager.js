class FlipbookManager {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 0;
        this.isBookOpen = false;
        this.pageMapping = {}; // To store page ID to page number mapping
        this.init();
    }

    init() {
        this.loadContent();
        this.initializeFlipbook();
        this.bindEvents();
    }

    loadContent() {
        const flipbook = $('#flipbook');

        // Add introduction page
        flipbook.append(this.createIntroPage());

        let pageIndex = 1; // Start from 1 (intro page is 0)

        // Add subhe section first
        if (writingsData.subhe) {
            writingsData.subhe.forEach(subhe => {
                pageIndex++;
                this.pageMapping[subhe.id] = pageIndex;
                flipbook.append(this.createContentPage(subhe, 'subhe'));
            });
        }

        // Add desert section
        if (writingsData.desert) {
            writingsData.desert.forEach(desert => {
                pageIndex++;
                this.pageMapping[desert.id] = pageIndex;
                flipbook.append(this.createContentPage(desert, 'desert'));
            });
        }

        // Add ishi section
        if (writingsData.ishi) {
            writingsData.ishi.forEach(ishi => {
                pageIndex++;
                this.pageMapping[ishi.id] = pageIndex;
                flipbook.append(this.createContentPage(ishi, 'ishi'));
            });
        }

        // Add scenes section
        writingsData.scenes.forEach(scene => {
            pageIndex++;
            this.pageMapping[scene.id] = pageIndex;
            flipbook.append(this.createContentPage(scene, 'scene'));
        });

        // Add poems section last
        writingsData.poems.forEach(poem => {
            pageIndex++;
            this.pageMapping[poem.id] = pageIndex;
            flipbook.append(this.createContentPage(poem, 'poem'));
        });

        this.totalPages = flipbook.children().length;
    }

    createIntroPage() {
        return `
            <div class="book-page intro-page">
                <div class="intro-content">
                    <h1>আমার লেখালেখি</h1>
                    <p>কবিতা এবং দৃশ্যকল্প</p>
                    <div class="intro-text">
                        <p>কথা বলার কিছু ব্যর্থ চেষ্টা</p>
                        <p>পাতা উল্টে পড়তে পারেন, ঘুরে দেখতে পারেন এক কথার জগত</p>
                    </div>
                </div>
            </div>
        `;
    }

    createContentPage(item, type) {
        return `
            <div id="${item.id}" class="writing-item scene-item">
                <h2 class="writing-title">${item.title}</h2>
                <div class="writing-date">${item.date}</div>
                <div class="writing-content">
                    ${item.content}
                </div>
            </div>
        `;
    }

    initializeFlipbook() {
        // Responsive width/height
        let width = 922, height = 600;
        if (window.innerWidth < 600) {
            width = window.innerWidth - 10;
            height = 260;
        } else if (window.innerWidth < 900) {
            width = 700;
            height = 400;
        } else if (window.innerWidth < 1200) {
            width = 700;
            height = 480;
        }

        $("#flipbook").turn({
            width: width,
            height: height,
            autoCenter: true,
            elevation: 50,
            gradients: true,
            acceleration: true,
            when: {
                turning: (e, page, view) => this.onTurning(e, page, view),
                turned: (e, page, view) => this.onTurned(e, page, view)
            }
        });

        // Hide flipbook initially
        $("#flipbook").hide();
        $(".page-nav-controls, .keyboard-hint, .page-corner-hint").hide();

        // Re-initialize on window resize for responsiveness
        $(window).off('resize.flipbook').on('resize.flipbook', () => {
            $("#flipbook").turn("size", 
                window.innerWidth < 600 ? window.innerWidth - 10 : (window.innerWidth < 900 ? 700 : (window.innerWidth < 1200 ? 700 : 922)),
                window.innerWidth < 600 ? 260 : (window.innerWidth < 900 ? 400 : (window.innerWidth < 1200 ? 480 : 600))
            );
        });
    }

    bindEvents() {
        // Book cover click
        $("#book-cover").click(() => this.openBook());

        // Navigation buttons
        $("#next-btn").click(() => $("#flipbook").turn('next'));
        $("#prev-btn").click(() => $("#flipbook").turn('previous'));

        // Keyboard navigation
        $(document).keydown((e) => this.handleKeyboard(e));

        // Sidebar navigation - this is the key fix for direct navigation
        $(".index-list a").click((e) => this.handleSidebarClick(e));

        // Tab system
        $("#poem-tab").click(() => this.switchTab('poem'));
        $("#scene-tab").click(() => this.switchTab('scene'));

        // Add page corners after content is loaded
        setTimeout(() => this.addPageCorners(), 1000);
    }

    openBook() {
        $("#book-cover").addClass('open');
        setTimeout(() => {
            $("#book-cover").hide().remove();
            $("#flipbook").show();
            $(".page-nav-controls, .keyboard-hint, .page-corner-hint").fadeIn();
            $("#flipbook").turn('next');
            this.updateNavButtons();
            this.isBookOpen = true;

            setTimeout(() => {
                $(".keyboard-hint, .page-corner-hint").fadeOut(1000);
            }, 5000);
        }, 800);
    }

    onTurning(e, page, view) {
        const pageId = $(e.target).turn('view')[0];
        if (pageId > 0) {
            const activePage = $(e.target).children().eq(pageId - 1).attr('id');
            this.highlightActivePage(activePage);
        }
    }

    onTurned(e, page, view) {
        this.currentPage = page;
        this.updateNavButtons();
    }

    handleKeyboard(e) {
        if ($("#flipbook").is(":visible")) {
            if (e.keyCode == 37) { // Left arrow
                $("#flipbook").turn('previous');
                return false;
            } else if (e.keyCode == 39) { // Right arrow
                $("#flipbook").turn('next');
                return false;
            }
        }
    }

    handleSidebarClick(e) {
        e.preventDefault();
        const pageId = $(e.target).data('page');

        // If book is not open yet, open it first then navigate
        if (!this.isBookOpen) {
            this.openBook();
            // Wait for book to open then navigate
            setTimeout(() => {
                this.goToPage(pageId);
            }, 1000);
        } else {
            this.goToPage(pageId);
        }
    }

    switchTab(tabType) {
        if (tabType === 'poem') {
            $("#poem-list").show();
            $("#scene-list").hide();
            $("#poem-tab").addClass('active');
            $("#scene-tab").removeClass('active');
        } else {
            $("#poem-list").hide();
            $("#scene-list").show();
            $("#scene-tab").addClass('active');
            $("#poem-tab").removeClass('active');
        }
    }

    goToPage(pageId) {
        // Ensure book is visible
        $("#book-cover").hide();
        $("#flipbook").show();
        $(".page-nav-controls").fadeIn();

        // Find the page index (add 1 because turn.js uses 1-based indexing)
        const pageNumber = this.pageMapping[pageId];
        if (pageNumber) {
            $("#flipbook").turn('page', pageNumber);
            this.updateNavButtons();
            this.highlightActivePage(pageId);
        }
    }

    updateNavButtons() {
        const currentPage = $("#flipbook").turn('page');
        const totalPages = $("#flipbook").turn('pages');

        $("#prev-btn").prop('disabled', currentPage <= 1);
        $("#next-btn").prop('disabled', currentPage >= totalPages);
    }

    highlightActivePage(pageId) {
        $(".index-list a").removeClass('active');
        $(".index-list a[data-page='" + pageId + "']").addClass('active');
    }

    addPageCorners() {
        $("#flipbook").find(".book-page, .writing-item").each(function() {
            if (!$(this).find('.page-corner-right').length) {
                const cornerRight = $("<div class='page-corner page-corner-right'></div>");
                const cornerLeft = $("<div class='page-corner page-corner-left'></div>");
                $(this).append(cornerRight).append(cornerLeft);
            }
        });

        // Corner click events
        $(document).on("click", ".page-corner-right", (e) => {
            e.stopPropagation();
            $("#flipbook").turn('next');
        });

        $(document).on("click", ".page-corner-left", (e) => {
            e.stopPropagation();
            $("#flipbook").turn('previous');
        });
    }
    
}

// Initialize flipbook when document is ready
$(document).ready(() => {
    new FlipbookManager();

    // Sidebar toggle logic
    $("#poem-tab").off("click").on("click", function(e) {
        $("#poem-list").stop(true, true).slideToggle(200);
        $(this).toggleClass('active');
    });
    $("#scene-tab").off("click").on("click", function(e) {
        $("#scene-list").stop(true, true).slideToggle(200);
        $(this).toggleClass('active');
    });
    $("#desert-tab").off("click").on("click", function(e) {
        $("#desert-list").stop(true, true).slideToggle(200);
        $(this).toggleClass('active');
    });
    $("#subhe-tab").off("click").on("click", function(e) {
        $("#subhe-list").stop(true, true).slideToggle(200);
        $(this).toggleClass('active');
    });
    $("#ishi-tab").off("click").on("click", function(e) {
        $("#ishi-list").stop(true, true).slideToggle(200);
        $(this).toggleClass('active');
    });

    // Bengali digit formatter
    const bn = new Intl.NumberFormat('bn', { useGrouping: false });
    const toBn = n => bn.format(n);

    // Page number rendering logic
    function renderFooter(pageNum) {
        $("#page-footer").text("পাতা " + toBn(pageNum));
    }

    // Initial render
    renderFooter(1);

    // Listen for page turns from turn.js
    $("#flipbook").on("turned", function(event, page, view) {
        renderFooter(page);
    });

    // Also update on navigation button click
    $("#next-btn").click(function() {
        const page = $("#flipbook").turn('page');
        renderFooter(page);
    });
    $("#prev-btn").click(function() {
        const page = $("#flipbook").turn('page');
        renderFooter(page);
    });
});
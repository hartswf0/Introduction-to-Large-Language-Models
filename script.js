// Store all datasets and structure them based on categories
const siteDataSets = {
    "Models": {
        "GPT": gptData,
        "Llama": llamaData,
        "Claude": claudeData,
        "Gemini": geminiData
    },
    "Benchmarks": {
        "MMLU": mmluData,
        "HumanEval": humanevalData
    },
    "Prompt Engineering": {
        "Basics": basicsData,
        "Advanced": advancedData
    },
    "Applications": {
        "Healthcare": healthcareData,
        "Finance": financeData,
        "Education": educationData
    }
};

// Function to render the side menu with collapsible sections
function renderSideMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.innerHTML = ''; // Clear any existing content

    Object.keys(siteDataSets).forEach(category => {
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = category;
        sectionTitle.style.cursor = 'pointer';
        sectionTitle.classList.add('category-title');

        // Submenu container (hidden by default)
        const subMenu = document.createElement('ul');
        subMenu.classList.add('submenu');
        subMenu.style.display = 'none'; // Hidden by default

        // Populate submenu items
        Object.keys(siteDataSets[category]).forEach(model => {
            const subMenuItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '/';
            link.textContent = model;
            link.onclick = (e) => {
                e.preventDefault();
                renderModelPages(category, model);
            };

            subMenuItem.appendChild(link);
            subMenu.appendChild(subMenuItem);
        });

        // Toggle the submenu when the section title is clicked
        sectionTitle.onclick = (event) => {
            event.stopPropagation(); // Prevent submenu toggling from also showing all slides
            const isVisible = subMenu.style.display === 'block';
            subMenu.style.display = isVisible ? 'none' : 'block'; // Toggle visibility
            if (!isVisible) {
                // Only show slides for the section when expanding
                renderSectionOverview(category);
            }
        };

        sideMenu.appendChild(sectionTitle);
        sideMenu.appendChild(subMenu);
    });
}

// Function to render all slides from all subsections within a section (e.g., all models, benchmarks, etc.)
function renderSectionOverview(category) {
    const slidesContainer = document.getElementById('slidesContainer');
    const sourcesContainer = document.getElementById('sourcesContainer');
    const pageTitle = document.getElementById('pageTitle');
    
    slidesContainer.innerHTML = ''; // Clear previous content
    pageTitle.textContent = `${category} Overview`; // Update the page title

    // Loop through each model/entity in the category and render all their slides
    Object.keys(siteDataSets[category]).forEach(model => {
        const modelData = siteDataSets[category][model]; // Get data for the specific model/entity

        modelData.sections.forEach((section, sectionIndex) => {
            section.pages.forEach((page) => {
                page.slides.forEach((slide) => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.onclick = () => openModal(slide);

                    const title = document.createElement('div');
                    title.className = 'card-title';
                    title.textContent = slide.title;

                    const content = document.createElement('div');
                    content.className = 'card-content';
                    const contentList = document.createElement('ul');
                    slide.content.forEach(item => {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${item.label}: ${item.value}`;
                        contentList.appendChild(listItem);
                    });
                    content.appendChild(contentList);

                    card.appendChild(title);
                    card.appendChild(content);
                    slidesContainer.appendChild(card);
                });
            });
        });
    });

    // Render sources if available
    renderSourcesFromCategory(category);
}

// Function to render the sources section for the whole category
function renderSourcesFromCategory(category) {
    const sourcesContainer = document.getElementById('sourcesContainer');
    sourcesContainer.innerHTML = ''; // Clear previous sources

    const sources = new Set();
    Object.keys(siteDataSets[category]).forEach(model => {
        const modelData = siteDataSets[category][model];
        modelData.sections.forEach(section => {
            section.pages.forEach(page => {
                page.source.forEach(source => sources.add(source));
            });
        });
    });

    if (sources.size > 0) {
        const sourcesTitle = document.createElement('h2');
        sourcesTitle.textContent = "Sources";
        sourcesContainer.appendChild(sourcesTitle);

        const sourcesList = document.createElement('ul');
        sources.forEach(sourceUrl => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = sourceUrl;
            link.textContent = sourceUrl;
            link.target = "_blank"; // Open in a new tab
            listItem.appendChild(link);
            sourcesList.appendChild(listItem);
        });
        sourcesContainer.appendChild(sourcesList);
    }
}

// Function to render the pages of a specific model or benchmark
function renderModelPages(category, model) {
    currentSiteData = siteDataSets[category][model]; // Load the selected dataset

    if (!currentSiteData) {
        console.error(`No data found for ${model} in ${category}`);
        return;
    }

    const slidesContainer = document.getElementById('slidesContainer');
    const sourcesContainer = document.getElementById('sourcesContainer');
    const pageTitle = document.getElementById('pageTitle');
    
    slidesContainer.innerHTML = ''; // Clear previous content
    pageTitle.textContent = `${model} Pages`; // Update the page title

    currentSiteData.sections.forEach((section, sectionIndex) => {
        // Loop through each page in the section
        section.pages.forEach((page) => {
            // Create a card for each page
            const card = document.createElement('div');
            card.className = 'card';

            // Add the page title as a header
            const title = document.createElement('div');
            title.className = 'card-title';
            title.textContent = page.title;
            card.appendChild(title);

            // Loop through each slide within the page and display all the content
            page.slides.forEach((slide) => {
                const slideTitle = document.createElement('div');
                slideTitle.className = 'slide-title';
                slideTitle.textContent = slide.title;
                card.appendChild(slideTitle);

                const contentList = document.createElement('ul');
                slide.content.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${item.label}: ${item.value}`;
                    contentList.appendChild(listItem);
                });
                card.appendChild(contentList);
            });

            slidesContainer.appendChild(card);
        });
    });

    // Render sources if available
    renderSources(currentSiteData.sections);
}


// Function to open a modal with the slide content
function openModal(slide) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `<h2>${slide.title}</h2>`;

    const contentList = document.createElement('ul');
    slide.content.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.label}: ${item.value}`;
        contentList.appendChild(listItem);
    });
    modalContent.appendChild(contentList);

    modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Call to render the side menu on page load
renderSideMenu();

// // Store all datasets and structure them based on categories
// const siteDataSets = {
//     "Models": {
//         "GPT": gptData,
//         "Llama": llamaData,
//         "Claude": claudeData,
//         "Gemini": geminiData
//     },
//     "Benchmarks": {
//         "MMLU": mmluData,
//         "HumanEval": humanevalData
//     },
//     "Prompt Engineering": {
//         "Basics": basicsData,
//         "Advanced": advancedData
//     },
//     "Applications": {
//         "Healthcare": healthcareData,
//         "Finance": financeData,
//         "Education": educationData
//     }
// };

// // Function to render the side menu with collapsible sections
// function renderSideMenu() {
//     const sideMenu = document.getElementById('sideMenu');
//     sideMenu.innerHTML = ''; // Clear any existing content

//     Object.keys(siteDataSets).forEach(category => {
//         const sectionTitle = document.createElement('h3');
//         sectionTitle.textContent = category;
//         sectionTitle.style.cursor = 'pointer';
//         sectionTitle.classList.add('category-title');

//         // Submenu container (hidden by default)
//         const subMenu = document.createElement('ul');
//         subMenu.classList.add('submenu');
//         subMenu.style.display = 'none'; // Hidden by default

//         // Populate submenu items
//         Object.keys(siteDataSets[category]).forEach(model => {
//             const subMenuItem = document.createElement('li');
//             const link = document.createElement('a');
//             link.href = 'javascript:void(0);'; // Prevent default navigation
//             link.textContent = model;
//             link.onclick = (e) => {
//                 e.preventDefault();
//                 renderModelPages(category, model);
//             };

//             subMenuItem.appendChild(link);
//             subMenu.appendChild(subMenuItem);
//         });

//         // Toggle the submenu when the section title is clicked
//         sectionTitle.onclick = (event) => {
//             event.stopPropagation(); // Prevent submenu toggling from also showing all slides
//             const isVisible = subMenu.style.display === 'block';
//             subMenu.style.display = isVisible ? 'none' : 'block'; // Toggle visibility
//             if (!isVisible) {
//                 // Only show slides for the section when expanding
//                 renderSectionOverview(category);
//             }
//         };

//         sideMenu.appendChild(sectionTitle);
//         sideMenu.appendChild(subMenu);
//     });
// }

// // Function to render all slides from all subsections within a section (e.g., all models, benchmarks, etc.)
// function renderSectionOverview(category) {
//     const slidesContainer = document.getElementById('slidesContainer');
//     const sourcesContainer = document.getElementById('sourcesContainer');
//     const pageTitle = document.getElementById('pageTitle');
    
//     slidesContainer.innerHTML = ''; // Clear previous content
//     pageTitle.textContent = `${category} Overview`; // Update the page title

//     // Loop through each model/entity in the category and render all their slides
//     Object.keys(siteDataSets[category]).forEach(model => {
//         const modelData = siteDataSets[category][model]; // Get data for the specific model/entity

//         modelData.sections.forEach((section, sectionIndex) => {
//             // Render all slides within the section
//             section.pages.forEach((page, pageIndex) => {
//                 page.slides.forEach((slide, slideIndex) => {
//                     const card = document.createElement('div');
//                     card.className = 'card';
//                     card.onclick = () => openModal(slideIndex, sectionIndex, pageIndex, category, model);

//                     const title = document.createElement('div');
//                     title.className = 'card-title';
//                     title.textContent = slide.title;

//                     const content = document.createElement('div');
//                     content.className = 'card-content';
//                     const contentList = document.createElement('ul');
//                     slide.content.forEach(item => {
//                         const listItem = document.createElement('li');
//                         listItem.textContent = `${item.label}: ${item.value}`;
//                         contentList.appendChild(listItem);
//                     });
//                     content.appendChild(contentList);

//                     card.appendChild(title);
//                     card.appendChild(content);

//                     // Add the source link
//                     if (page.source) {
//                         const sourceLink = document.createElement('a');
//                         sourceLink.href = page.source[0]; // Assuming only one source, adjust if multiple
//                         sourceLink.textContent = "Source";
//                         sourceLink.target = "_blank";
//                         sourceLink.className = 'card-source';
//                         card.appendChild(sourceLink);
//                     }

//                     slidesContainer.appendChild(card);
//                 });
//             });
//         });
//     });

//     // Render sources if available
//     renderSourcesFromCategory(category);
// }

// // Function to render the sources section for the whole category
// function renderSourcesFromCategory(category) {
//     const sourcesContainer = document.getElementById('sourcesContainer');
//     sourcesContainer.innerHTML = ''; // Clear previous sources

//     const sources = new Set();
//     Object.keys(siteDataSets[category]).forEach(model => {
//         const modelData = siteDataSets[category][model];
//         modelData.sections.forEach(section => {
//             section.pages.forEach(page => {
//                 page.source.forEach(source => sources.add(source));
//             });
//         });
//     });

//     if (sources.size > 0) {
//         const sourcesTitle = document.createElement('h2');
//         sourcesTitle.textContent = "Sources";
//         sourcesContainer.appendChild(sourcesTitle);

//         const sourcesList = document.createElement('ul');
//         sources.forEach(sourceUrl => {
//             const listItem = document.createElement('li');
//             const link = document.createElement('a');
//             link.href = sourceUrl;
//             link.textContent = sourceUrl;
//             link.target = "_blank"; // Open in a new tab
//             listItem.appendChild(link);
//             sourcesList.appendChild(listItem);
//         });
//         sourcesContainer.appendChild(sourcesList);
//     }
// }

// // Function to render the pages of a specific model or benchmark
// function renderModelPages(category, model) {
//     currentSiteData = siteDataSets[category][model]; // Load the selected dataset

//     if (!currentSiteData) {
//         console.error(`No data found for ${model} in ${category}`);
//         return;
//     }

//     const slidesContainer = document.getElementById('slidesContainer');
//     const sourcesContainer = document.getElementById('sourcesContainer');
//     const pageTitle = document.getElementById('pageTitle');
    
//     slidesContainer.innerHTML = ''; // Clear previous content
//     pageTitle.textContent = `${model} Pages`; // Update the page title

//     currentSiteData.sections.forEach((section, sectionIndex) => {
//         section.pages.forEach((page, pageIndex) => {
//             // Loop through each slide within the page and display all the content
//             page.slides.forEach((slide, slideIndex) => {
//                 const card = document.createElement('div');
//                 card.className = 'card';

//                 const slideTitle = document.createElement('div');
//                 slideTitle.className = 'slide-title';
//                 slideTitle.textContent = slide.title;
//                 card.appendChild(slideTitle);

//                 const contentList = document.createElement('ul');
//                 slide.content.forEach(item => {
//                     const listItem = document.createElement('li');
//                     listItem.textContent = `${item.label}: ${item.value}`;
//                     contentList.appendChild(listItem);
//                 });
//                 card.appendChild(contentList);

//                 // Add the source link
//                 if (page.source) {
//                     const sourceLink = document.createElement('a');
//                     sourceLink.href = page.source[0]; // Assuming only one source, adjust if multiple
//                     sourceLink.textContent = "Source";
//                     sourceLink.target = "_blank";
//                     sourceLink.className = 'card-source';
//                     card.appendChild(sourceLink);
//                 }

//                 slidesContainer.appendChild(card);
//             });
//         });
//     });

//     // Render sources if available
//     renderSources(currentSiteData.sections);
// }

// // Function to open a modal with the slide content
// function openModal(slideIndex, sectionIndex, pageIndex, category, model) {
//     const modal = document.getElementById('modal');
//     const modalContent = document.getElementById('modalContent');
//     const currentPage = siteDataSets[category][model].sections[sectionIndex].pages[pageIndex];
//     const currentSlide = currentPage.slides[slideIndex];
    
//     modalContent.innerHTML = `<h2>${currentSlide.title}</h2>`;

//     const contentList = document.createElement('ul');
//     currentSlide.content.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${item.label}: ${item.value}`;
//         contentList.appendChild(listItem);
//     });
//     modalContent.appendChild(contentList);

//     // Add the source link
//     if (currentPage.source) {
//         const sourceLink = document.createElement('a');
//         sourceLink.href = currentPage.source[0]; // Adjust for multiple sources if necessary
//         sourceLink.textContent = "Source";
//         sourceLink.target = "_blank";
//         sourceLink.className = 'modal-source';
//         modalContent.appendChild(sourceLink);
//     }

//     modal.style.display = 'flex';

//     // Add navigation buttons
//     const modalNav = document.createElement('div');
//     modalNav.className = 'modal-nav';

//     // Previous button
//     const prevButton = document.createElement('button');
//     prevButton.textContent = "Previous";
//     prevButton.onclick = () => {
//         if (slideIndex > 0) {
//             openModal(slideIndex - 1, sectionIndex, pageIndex, category, model);
//         }
//     };

//     // Next button
//     const nextButton = document.createElement('button');
//     nextButton.textContent = "Next";
//     nextButton.onclick = () => {
//         if (slideIndex < currentPage.slides.length - 1) {
//             openModal(slideIndex + 1, sectionIndex, pageIndex, category, model);
//         }
//     };

//     modalNav.appendChild(prevButton);
//     modalNav.appendChild(nextButton);
//     modalContent.appendChild(modalNav);
// }

// // Function to close the modal
// function closeModal() {
//     const modal = document.getElementById('modal');
//     modal.style.display = 'none';
// }

// // Call to render the side menu on page load
// document.addEventListener('DOMContentLoaded', function() {
//     renderSideMenu();
// });
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
            link.href = 'javascript:void(0);'; // Prevent default navigation
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
    const cardGrids = {
        "Models": document.getElementById('modelsCardGrid'),
        "Benchmarks": document.getElementById('benchmarksCardGrid'),
        "Prompt Engineering": document.getElementById('promptEngineeringCardGrid'),
        "Applications": document.getElementById('applicationsCardGrid')
    };

    const pageTitle = document.getElementById('pageTitle');
    pageTitle.textContent = `${category} Overview`; // Update the page title

    Object.keys(siteDataSets[category]).forEach(model => {
        const modelData = siteDataSets[category][model]; // Get data for the specific model/entity

        modelData.sections.forEach((section, sectionIndex) => {
            // Render all slides within the section
            section.pages.forEach((page, pageIndex) => {
                page.slides.forEach((slide, slideIndex) => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.onclick = () => openModal(slideIndex, sectionIndex, pageIndex, category, model);

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

                    // Add the source link
                    if (page.source) {
                        const sourceLink = document.createElement('a');
                        sourceLink.href = page.source[0]; // Assuming only one source, adjust if multiple
                        sourceLink.textContent = "Source";
                        sourceLink.target = "_blank";
                        sourceLink.className = 'card-source';
                        card.appendChild(sourceLink);
                    }

                    // Append the card to the correct grid (models, benchmarks, etc.)
                    cardGrids[category].appendChild(card);
                });
            });
        });
    });
}

// Function to render the pages of a specific model or benchmark
function renderModelPages(category, model) {
    const slidesContainer = document.getElementById('slidesContainer');
    const pageTitle = document.getElementById('pageTitle');
    
    slidesContainer.innerHTML = ''; // Clear previous content
    pageTitle.textContent = `${model} Pages`; // Update the page title

    const currentSiteData = siteDataSets[category][model]; // Load the selected dataset
    if (!currentSiteData) {
        console.error(`No data found for ${model} in ${category}`);
        return;
    }

    currentSiteData.sections.forEach((section, sectionIndex) => {
        section.pages.forEach((page, pageIndex) => {
            page.slides.forEach((slide, slideIndex) => {
                const card = document.createElement('div');
                card.className = 'card';

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

                // Add the source link
                if (page.source) {
                    const sourceLink = document.createElement('a');
                    sourceLink.href = page.source[0]; // Assuming only one source, adjust if multiple
                    sourceLink.textContent = "Source";
                    sourceLink.target = "_blank";
                    sourceLink.className = 'card-source';
                    card.appendChild(sourceLink);
                }

                slidesContainer.appendChild(card);
            });
        });
    });

    renderSources(currentSiteData.sections);
}

// Function to open a modal with the slide content
function openModal(slideIndex, sectionIndex, pageIndex, category, model) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const currentPage = siteDataSets[category][model].sections[sectionIndex].pages[pageIndex];
    const currentSlide = currentPage.slides[slideIndex];
    
    modalContent.innerHTML = `<h2>${currentSlide.title}</h2>`;

    const contentList = document.createElement('ul');
    currentSlide.content.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.label}: ${item.value}`;
        contentList.appendChild(listItem);
    });
    modalContent.appendChild(contentList);

    // Add the source link
    if (currentPage.source) {
        const sourceLink = document.createElement('a');
        sourceLink.href = currentPage.source[0]; // Adjust for multiple sources if necessary
        sourceLink.textContent = "Source";
        sourceLink.target = "_blank";
        sourceLink.className = 'modal-source';
        modalContent.appendChild(sourceLink);
    }

    modal.style.display = 'flex';

    // Add navigation buttons
    const modalNav = document.createElement('div');
    modalNav.className = 'modal-nav';

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = "Previous";
    prevButton.onclick = () => {
        if (slideIndex > 0) {
            openModal(slideIndex - 1, sectionIndex, pageIndex, category, model);
        }
    };

    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = "Next";
    nextButton.onclick = () => {
        if (slideIndex < currentPage.slides.length - 1) {
            openModal(slideIndex + 1, sectionIndex, pageIndex, category, model);
        }
    };

    modalNav.appendChild(prevButton);
    modalNav.appendChild(nextButton);
    modalContent.appendChild(modalNav);
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Call to render the side menu and model sections on page load
document.addEventListener('DOMContentLoaded', function() {
    renderSideMenu();
    // No initial section is rendered by default.
});

// ==========================================
// 1. DYNAMIC PDF / MULTI-ASSET ENGINE
// ==========================================

// ==========================================
// 1. DYNAMIC PDF / MULTI-ASSET ENGINE
// ==========================================

const multiProjectData = {
    marketing: {
        title: "Professional Design and Marketing",
        description: "Review the Mulago Smart Guide framework, operational budget design, and campaign canvas assets.",
        images: [
            // ⚠️ Double check your file extension here (.jpg vs .jpeg vs .png)
            { src: "assets/images/qr.jpeg", alt: "Project QR Code" } 
        ],
        pdfs: [
            { name: "View Budget Proposal (PDF)", url: "assets/pdfs/MulagoSmartGuideBudgetProposal.pdf" },
            { name: "View Business Canvas (PDF)", url: "assets/pdfs/MulagoSmartGuideBussinessCanvas.pdf" }
        ]
    },
    branding: {
        title: "Branding and Packaging",
        description: "Explore custom vector illustrations, conceptual moodboards, and commercial brand frameworks.",
        images: [
            { src: "assets/images/1.jpeg", alt: "Illustration Concept 1" },
            { src: "assets/images/2.jpeg", alt: "Illustration Concept 2" },
            { src: "assets/images/3.jpeg", alt: "Illustration Concept 3" },
            { src: "assets/images/4.jpeg", alt: "Illustration Concept 4" }
        ],
        pdfs: [
            { name: "View Brand Identity (PDF)", url: "assets/pdfs/BRAND.pdf" },
            { name: "View Project Moodboard (PDF)", url: "assets/pdfs/MOODBOARD.pdf" }
        ]
    }
};

// ... keep everything else underneath in script.js exactly as it is!

// Legacy single-action function for original project cards
function openProject(pdfName) {
    const pdfPath = `assets/pdfs/${pdfName}`;
    window.open(pdfPath, '_blank');
}

// Open Multi-Asset Modal Frame
function openMultiPdfModal(projectKey) {
    const data = multiProjectData[projectKey];
    if (!data) return;

    // Map content strings
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalDescription').innerText = data.description;

    // Inject asset imagery gallery
    const galleryContainer = document.getElementById('modalGallery');
    galleryContainer.innerHTML = '';
    
    data.images.forEach(imgAsset => {
        const img = document.createElement('img');
        img.src = imgAsset.src;
        img.alt = imgAsset.alt;
        // Graceful broken asset placeholder fallback
        img.onerror = function() { 
            this.src = `https://placehold.co/400x300?text=${encodeURIComponent(imgAsset.alt)}`; 
        };
        galleryContainer.appendChild(img);
    });

    // Inject download anchor components
    const linksContainer = document.getElementById('modalLinks');
    linksContainer.innerHTML = '';
    
    data.pdfs.forEach(pdfAsset => {
        const anchor = document.createElement('a');
        anchor.href = pdfAsset.url;
        anchor.className = 'modal-action-btn';
        anchor.target = '_blank';
        anchor.innerHTML = `<i class="fa-solid fa-file-pdf"></i> ${pdfAsset.name}`;
        linksContainer.appendChild(anchor);
    });

    // Render viewport container active
    const modalFrame = document.getElementById('projectModal');
    modalFrame.classList.add('modal-visible');
    document.body.style.overflow = 'hidden'; // Lock primary container scrolling
}

// Close Modal Frame Engine
function closeMultiPdfModal() {
    const modalFrame = document.getElementById('projectModal');
    modalFrame.classList.remove('modal-visible');
    document.body.style.overflow = ''; // Unlock primary scrolling
}

// Window event monitoring to trap global background overlay click-outs
window.addEventListener('click', (event) => {
    const modalFrame = document.getElementById('projectModal');
    if (event.target === modalFrame) {
        closeMultiPdfModal();
    }
});


// ==========================================
// 2. MOBILE MENU TOGGLE LOGIC
// ==========================================
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));


// ==========================================
// 3. HIGH-PERFORMANCE SCROLL OBSERVER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});

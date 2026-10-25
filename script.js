document.addEventListener("DOMContentLoaded", () => {

    /* task 6 */
    let count = 0;
    const counterDisplay = document.getElementById("counter-value");
    const btnIncrease = document.getElementById("btn-increase");
    const btnDecrease = document.getElementById("btn-decrease");
    const btnReset = document.getElementById("btn-reset");

    function updateCounter(newValue) {
        if (newValue < 0) {
            count = 0;
        } else {
            count = newValue;
        }
        counterDisplay.textContent = count;
    }

    btnIncrease.addEventListener("click", () => {
        updateCounter(count + 1);
    });

    btnDecrease.addEventListener("click", () => {
        updateCounter(count - 1);
    });

    btnReset.addEventListener("click", () => {
        updateCounter(0);
    });

    /* task 7 */
    const liveInput = document.getElementById("live-input");
    const livePreview = document.getElementById("live-preview");
    const charCount = document.getElementById("char-count");
    const btnClear = document.getElementById("btn-clear");
    const DEFAULT_PREVIEW_TEXT = "Your text will appear here";

    liveInput.addEventListener("input", (event) => {
        const text = event.target.value;
        charCount.textContent = text.length;

        if (text.trim() === "") {
            livePreview.textContent = DEFAULT_PREVIEW_TEXT;
        } else {
            livePreview.textContent = text;
        }
    });

    btnClear.addEventListener("click", () => {
        liveInput.value = "";
        charCount.textContent = "0";
        livePreview.textContent = DEFAULT_PREVIEW_TEXT;
        liveInput.focus();
    });

    /* task 8 */
    const imageSelect = document.getElementById("image-select");
    const previewImg = document.getElementById("preview-img");
    const imageCaption = document.getElementById("image-caption");

    const imageOptions = {
        item1: {
            src: "images/gaming_setup.jpg",
            alt: "Gaming Setup showcase",
            caption: "Option 1 — Clean modern workstation and gaming setup."
        },
        item2: {
            src: "images/code_editor.jpg",
            alt: "Code Editor laptop showcase",
            caption: "Option 2 — Development environment and laptop view."
        },
        item3: {
            src: "images/abstract_art.jpg",
            alt: "Abstract landscape or nature view",
            caption: "Option 3 — Scenic nature and outdoor photography."
        }
    };

    imageSelect.addEventListener("change", (event) => {
        const selectedValue = event.target.value;
        const data = imageOptions[selectedValue];

        if (data) {
            previewImg.src = data.src;
            previewImg.alt = data.alt;
            imageCaption.textContent = data.caption;
        }
    });

    /* task 9 */
    const keyInput = document.getElementById("key-input");
    const keyStatus = document.getElementById("key-status");
    const keyResult = document.getElementById("key-result");

    keyInput.addEventListener("keydown", (event) => {
        keyStatus.innerHTML = `Last pressed key: <em>${event.key}</em>`;

        if (event.key === "Enter") {
            event.preventDefault();
            keyResult.textContent = keyInput.value.trim() !== "" ? keyInput.value : "N/A";
        } else if (event.key === "Escape") {
            event.preventDefault();
            keyInput.value = "";
            keyResult.textContent = "N/A";
            keyStatus.innerHTML = `Last pressed key: <em>Escape (Cleared)</em>`;
        }
    });

    /* task 10 */
    const focusableCard = document.getElementById("focusable-card");
    const cardInstruction = document.getElementById("card-instruction");
    const eventTracker = document.getElementById("event-tracker");

    function applyHighlight(reason, instructionText) {
        focusableCard.classList.add("highlighted");
        cardInstruction.textContent = instructionText;
        eventTracker.textContent = `Triggered event: ${reason}`;
    }

    function removeHighlight(reason, instructionText) {
        focusableCard.classList.remove("highlighted");
        cardInstruction.textContent = instructionText;
        eventTracker.textContent = `Triggered event: ${reason}`;
    }

    focusableCard.addEventListener("mouseenter", () => {
        applyHighlight("mouseenter", "Mouse hovered over the card!");
    });

    focusableCard.addEventListener("mouseleave", () => {
        removeHighlight("mouseleave", "Hover over or focus this card to trigger events.");
    });

    focusableCard.addEventListener("focus", () => {
        applyHighlight("focus", "Card received keyboard focus!");
    });

    focusableCard.addEventListener("blur", () => {
        removeHighlight("blur", "Hover over or focus this card to trigger events.");
    });
});
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.transform = 'translateX(0%)',
        sidebar.style.backgroundcolor = 'white';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.transform = 'translateX(100%)'
}
document.addEventListener('DOMContentLoaded', function () {
    const progress = document.getElementById('progress');
    const progressValue = document.getElementById('progress-value');
    const fileInput = document.getElementById('file');
    const form = document.getElementById('customForm');
    const fileUploadLabel = document.querySelector('.custom-file-upload');

    fileUploadLabel.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            progress.value = 0;
            progressValue.textContent = '0%';
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const file = fileInput.files[0];
        if (file) {
            const duration = 5000; // 5 seconds
            const startTime = performance.now();

            const updateProgress = (timestamp) => {
                const elapsedTime = timestamp - startTime;
                const progressPercent = Math.min((elapsedTime / duration) * 100, 100);

                progress.value = progressPercent;
                progressValue.textContent = `${Math.round(progressPercent)}%`;

                if (progressPercent < 100) {
                    requestAnimationFrame(updateProgress);
                }
            };

            requestAnimationFrame(updateProgress);
        }
        form.reset()
    });
});

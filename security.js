<script>
(function () {
    // Bloquer le clic droit
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });

    // Bloquer certains raccourcis clavier
    document.addEventListener("keydown", function (e) {
        if (
            e.key === "F12" ||
            (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
            (e.ctrlKey && e.key.toUpperCase() === "U")
        ) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    // Détection basique des DevTools
    let devtoolsOpen = false;

    const checkDevTools = () => {
        const threshold = 160;

        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;

        if (widthDiff > threshold || heightDiff > threshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;

                document.body.innerHTML = `
                    <div style="
                        position:fixed;
                        inset:0;
                        background:#000;
                        color:#fff;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-family:Arial;
                        text-align:center;
                        z-index:999999;
                    ">
                        <div>
                            <h1>⚠️ Accès bloqué</h1>
                            <p>Veuillez fermer les outils de développement.</p>
                        </div>
                    </div>
                `;
            }
        }
    };

    setInterval(checkDevTools, 500);
})();
</script>

document.addEventListener('DOMContentLoaded', function () {
    const shareButton = document.getElementById('shareButton');
    const shareMenu = document.getElementById('shareMenu');
    const closeShareMenu = document.getElementById('closeShareMenu');
    const shareItems = document.querySelectorAll('.share-menu-item');
    const toast = document.getElementById('shareToast');
    const toastMessage = document.getElementById('toastMessage');

    const pageUrl = "teamzenite.com";
    const pageTitle = 'Team Zenite - Inovação que nasce no campo';
    const pageDescription = 'Tecnologia de ponta para o agronegócio moderno. Conheça o GadOn e transforme sua produção rural.';

    shareButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        shareMenu.classList.toggle('active');
    });

    closeShareMenu.addEventListener('click', function (e) {
        e.stopPropagation();
        shareMenu.classList.remove('active');
    });

    document.addEventListener('click', function (e) {
        if (!shareMenu.contains(e.target) && !shareButton.contains(e.target)) {
            shareMenu.classList.remove('active');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            shareMenu.classList.remove('active');
        }
    });

    shareItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const platform = this.getAttribute('data-share');
            shareOn(platform);
        });
    });

    function shareOn(platform) {
        let url = '';

        switch (platform) {
            case 'whatsapp':
                url = `https://wa.me/?text=${encodeURIComponent(pageTitle + ' - ' + pageUrl)}`;
                window.open(url, '_blank');
                break;

            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                window.open(url, '_blank');
                break;

            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(pageTitle)}&url=${encodeURIComponent(pageUrl)}`;
                window.open(url, '_blank');
                break;

            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
                window.open(url, '_blank');
                break;

            case 'email':
                const subject = encodeURIComponent(pageTitle);
                const body = encodeURIComponent(`${pageDescription}\n\n${pageUrl}`);
                window.location.href = `mailto:?subject=${subject}&body=${body}`;
                break;

            case 'copy':
                copyToClipboard(pageUrl);
                break;
        }

        shareMenu.classList.remove('active');
    }

    function copyToClipboard(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
                showToast('Link copiado com sucesso!');
            }).catch(function () {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('Link copiado com sucesso!');
        } catch (err) {
            showToast('Erro ao copiar o link');
        }
        document.body.removeChild(textarea);
    }

    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        setTimeout(function () {
            toast.classList.remove('show');
        }, 3000);
    }
});
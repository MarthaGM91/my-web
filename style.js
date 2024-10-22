document.querySelectorAll('.learn-more').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Feature details coming soon!');
    });
});


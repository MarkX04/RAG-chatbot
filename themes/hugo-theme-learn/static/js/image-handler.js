// Image loading and error handling
$(document).ready(function() {
    // Handle broken images
    $('img').on('error', function() {
        var $img = $(this);
        var altText = $img.attr('alt') || 'Image not found';
        
        // Create a placeholder div
        var placeholder = $('<div class="broken-image-placeholder">' +
            '<div class="broken-image-icon">🖼️</div>' +
            '<div class="broken-image-text">' + altText + '</div>' +
            '</div>');
        
        // Apply styling to placeholder
        placeholder.css({
            'display': 'inline-block',
            'width': $img.width() || '300px',
            'height': $img.height() || '200px',
            'border': '1px dashed #ccc',
            'background': '#f8f9fa',
            'text-align': 'center',
            'vertical-align': 'middle',
            'padding': '20px',
            'box-sizing': 'border-box',
            'border-radius': '4px',
            'color': '#6c757d',
            'font-size': '14px'
        });
        
        // Replace the broken image with placeholder
        $img.replaceWith(placeholder);
    });
    
    // Ensure all images have proper loading attributes
    $('img').each(function() {
        var $img = $(this);
        
        // Add loading="lazy" for better performance
        if (!$img.attr('loading')) {
            $img.attr('loading', 'lazy');
        }
        
        // Add error handling for images that might load later
        $img.on('load', function() {
            $(this).removeClass('loading-image').addClass('loaded-image');
        });
        
        // Add loading class initially
        $img.addClass('loading-image');
    });
    
    // Fix relative image paths
    $('img[src^="/images/"]').each(function() {
        var $img = $(this);
        var currentSrc = $img.attr('src');
        
        // Check if we're in a subdirectory and need to adjust the path
        var pathSegments = window.location.pathname.split('/').filter(Boolean);
        if (pathSegments.length > 0 && !currentSrc.startsWith('/')) {
            // Adjust relative path if needed
            var basePath = window.location.origin;
            if (currentSrc.startsWith('/')) {
                $img.attr('src', basePath + currentSrc);
            }
        }
    });
});

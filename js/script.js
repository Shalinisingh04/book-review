// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Set active navigation link based on current page
    setActiveNavLink();
});

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Book data (simulated database)
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A story of decadence and excess, Gatsby explores the darker aspects of the Jazz Age.",
        cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QTkwRTI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNTdBQkQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VGhlIEdyZWF0IEdhdHNieTwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPmJ5IEYuIFNjb3R0IEZpdHpnZXJhbGQ8L3RleHQ+PC9zdmc+",
        rating: 4.2,
        category: "Classic",
        year: 1925
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A powerful story of racial injustice and the loss of innocence in the American South.",
        cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFNzRDM0M7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNjM0M0M7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VG8gS2lsbCBhPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vY2tpbmdiaXJkPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+YnkgSGFycGVyIExlZTwvdGV4dD48L3N2Zz4=",
        rating: 4.8,
        category: "Classic",
        year: 1960
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel about totalitarianism and the manipulation of truth and reality.",
        cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyN0FFNjA7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyMEE4NTU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+MTk4NDwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjY1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPmJ5IEdlb3JnZSBPcndlbGw8L3RleHQ+PC9zdmc+",
        rating: 4.5,
        category: "Dystopian",
        year: 1949
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A classic romance novel about the relationship between Elizabeth Bennet and Mr. Darcy.",
        cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM5QjU5QjY7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjQ5QjU7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UHJpZGUgYW5kPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByZWp1ZGljZTwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjYwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPmJ5IEphbmUgQXVzdGVuPC90ZXh0Pjwvc3ZnPg==",
        rating: 4.3,
        category: "Romance",
        year: 1813
    },
    {
        id: 5,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy novel about Bilbo Baggins' journey with thirteen dwarves to reclaim their homeland.",
        cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNGMzlDMTI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNFNjc4MTE7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VGhlIEhvYmJpdDwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPmJ5IEouUi5SLiBUb2xraWVuPC90ZXh0Pjwvc3ZnPg==",
        rating: 4.6,
        category: "Fantasy",
        year: 1937
    },
    {
        id: 6,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A novel about teenage alienation and loss of innocence in post-World War II America.",
        cover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNDk4REI7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMyODdDQ0I7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI0MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VGhlIENhdGNoZXI8L3RleHQ+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+aW4gdGhlIFJ5ZTwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjYwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPmJ5IEouRC4gU2FsaW5nZXI8L3RleHQ+PC9zdmc+",
        rating: 4.1,
        category: "Coming-of-age",
        year: 1951
    }
];

// Star rating functionality
function initializeStarRating() {
    const starContainers = document.querySelectorAll('.star-rating');
    
    starContainers.forEach(container => {
        const stars = container.querySelectorAll('.star');
        const ratingInput = container.previousElementSibling;
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                // Update visual stars
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                
                // Update hidden input
                if (ratingInput) {
                    ratingInput.value = index + 1;
                }
            });
        });
    });
}

// Form handling
function initializeReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    if (!reviewForm) return;

    // Populate book select dropdown
    const bookSelect = document.getElementById('bookSelect');
    if (bookSelect) {
        books.forEach(book => {
            const option = document.createElement('option');
            option.value = book.id;
            option.textContent = `${book.title} by ${book.author}`;
            bookSelect.appendChild(option);
        });
    }

    // Initialize star rating
    initializeStarRating();

    // Handle form submission
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(reviewForm);
        const review = {
            id: Date.now(),
            name: formData.get('name'),
            bookId: parseInt(formData.get('book')),
            rating: parseInt(formData.get('rating')),
            comment: formData.get('comment'),
            date: new Date().toISOString()
        };

        // Save review to localStorage
        saveReview(review);
        
        // Show success message
        showSuccessMessage('Review submitted successfully!');
        
        // Reset form
        reviewForm.reset();
        
        // Reset star rating
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => star.classList.remove('active'));
    });
}

// localStorage functions
function saveReview(review) {
    const reviews = getReviews();
    reviews.push(review);
    localStorage.setItem('bookReviews', JSON.stringify(reviews));
}

function getReviews() {
    const reviews = localStorage.getItem('bookReviews');
    return reviews ? JSON.parse(reviews) : [];
}

function getReviewsByBook(bookId) {
    const reviews = getReviews();
    return reviews.filter(review => review.bookId === bookId);
}

// Display reviews
function displayReviews(bookId) {
    const reviews = getReviewsByBook(bookId);
    const reviewsContainer = document.getElementById('reviewsContainer');
    
    if (!reviewsContainer) return;
    
    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p>No reviews yet. Be the first to review this book!</p>';
        return;
    }
    
    const reviewsHTML = reviews.map(review => {
        const book = books.find(b => b.id === review.bookId);
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const date = new Date(review.date).toLocaleDateString();
        
        return `
            <div class="review-item">
                <div class="review-header">
                    <span class="reviewer-name">${review.name}</span>
                    <span class="review-rating">${stars}</span>
                </div>
                <div class="review-content">${review.comment}</div>
                <div class="review-date">Reviewed on ${date}</div>
            </div>
        `;
    }).join('');
    
    reviewsContainer.innerHTML = reviewsHTML;
}

// Success message
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    const form = document.getElementById('reviewForm');
    if (form) {
        form.insertBefore(successDiv, form.firstChild);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
}

// Books page functionality
function initializeBooksPage() {
    const booksContainer = document.getElementById('booksContainer');
    if (!booksContainer) return;
    
    displayBooks(books);
    
    // Initialize filters
    initializeFilters();
}

function displayBooks(booksToShow) {
    const booksContainer = document.getElementById('booksContainer');
    if (!booksContainer) return;
    
    const booksHTML = booksToShow.map(book => {
        const stars = '★'.repeat(Math.floor(book.rating)) + '☆'.repeat(5 - Math.floor(book.rating));
        
        return `
            <div class="book-card">
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title}">
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p class="author">by ${book.author}</p>
                    <p class="description">${book.description}</p>
                    <div class="rating">
                        <span class="stars">${stars}</span>
                        <span class="rating-text">${book.rating}/5</span>
                    </div>
                    <div class="book-meta">
                        <span class="category">${book.category}</span>
                        <span class="year">${book.year}</span>
                    </div>
                    <button class="btn btn-small" onclick="showBookReviews(${book.id})">Read Reviews</button>
                </div>
            </div>
        `;
    }).join('');
    
    booksContainer.innerHTML = booksHTML;
}

function initializeFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (categoryFilter) {
        const categories = [...new Set(books.map(book => book.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
        
        categoryFilter.addEventListener('change', filterBooks);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }
}

function filterBooks() {
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    
    let filteredBooks = [...books];
    
    // Filter by category
    if (categoryFilter && categoryFilter.value !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.category === categoryFilter.value);
    }
    
    // Filter by search
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = searchInput.value.toLowerCase();
        filteredBooks = filteredBooks.filter(book => 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayBooks(filteredBooks);
}

function showBookReviews(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    // Create modal or navigate to reviews page
    const reviews = getReviewsByBook(bookId);
    const reviewsHTML = reviews.map(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const date = new Date(review.date).toLocaleDateString();
        
        return `
            <div class="review-item">
                <div class="review-header">
                    <span class="reviewer-name">${review.name}</span>
                    <span class="review-rating">${stars}</span>
                </div>
                <div class="review-content">${review.comment}</div>
                <div class="review-date">Reviewed on ${date}</div>
            </div>
        `;
    }).join('');
    
    // For now, we'll show reviews in an alert (you can enhance this with a modal)
    if (reviews.length === 0) {
        alert(`No reviews yet for "${book.title}". Be the first to review this book!`);
    } else {
        alert(`Reviews for "${book.title}":\n\n${reviews.map(r => `${r.name} (${r.rating}/5): ${r.comment}`).join('\n\n')}`);
    }
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'review.html':
            initializeReviewForm();
            break;
        case 'books.html':
            initializeBooksPage();
            break;
        default:
            // Home page or other pages
            break;
    }
}); 
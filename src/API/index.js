const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api'

export async function userRegistration(userObj) {
    try{
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });
        const result = await response.json();
        return result.token;
    } catch(error){
        console.error(error);
    }
}

export async function login(loginObj) {
    try{
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginObj)
        })
        const result = await response.json();
        return result.token;
    } catch(error){
        console.error(error);
    }
}

export async function getUserMe(token) {
    try{
        const response = await fetch(`${API_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result;
    } catch(error){
        console.error(error);
    }
}
export async function fetchBooks() {
    try{
        const response = await fetch(`${API_URL}/books`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        return result.books;

    } catch(error) {
        console.error(error)
    }
}

export async function fetchSingleBook(idNum) {
    try{
        const response = await fetch(`${API_URL}/books/${idNum}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const result = await response.json();
        return result.book;
    } catch(error) {
        console.error(error);
    }
}

export async function updateBook(token, bookId, availability) {
    try {
        const response = await fetch(`${API_URL}/books/${bookId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                available: `${availability}`,
            })
        });
        const result = await response.json();
        return result.book;
        
    } catch(error) {
        console.error(error)
    }
}

export async function getReservations(token) {
    try{
        const response = await fetch(`${API_URL}/reservations/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result.reservation;
    } catch(error) {
        console.error(error);
    }
}

export async function deleteReservation(resId, token) {
    try{
        const response = await fetch(`${API_URL}/reservations/${resId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result;
    } catch(error) {
        console.error(error);
    }
}
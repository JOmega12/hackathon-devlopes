import { API_CONFIG } from "./config"
import { getAllDogs } from "./getAllDogs"



export type BookingIds = {
    userId: number,
    dogId: number
}

export const bookDogs = () => {
    return fetch(API_CONFIG.baseUrl + '/bookings')
        .then((res) => {
            if(!res.ok) {
                throw new Error('Failed to get bookings')
            }
            return res.json();
        })
    
}

export const createBooking = ({userId, dogId}: BookingIds) =>{ 
    return fetch(API_CONFIG.baseUrl + '/bookings', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, dogId})
    }).then((res) => {
        if(!res.ok) {
            throw new Error('Failed to create a booking')
        }
        return
    })
}


const deleteBooking = async(id:number) => {
    return fetch(API_CONFIG.baseUrl + '/bookings/' + id, {
        method: "DELETE",
    }).then((res) => {
        if(!res.ok) {
            throw new Error("Failed to delete the bookings")
        }
        return res;
    })

}
export const toggleBookingAPI = async({userId, dogId}: BookingIds) => {
    const allBookings = await getAllDogs();
    const matchingBookings = allBookings.find((booking: BookingIds) => {
        return booking.userId === userId && booking.dogId === dogId
    });

    if(!matchingBookings) {
        return await createBooking({userId, dogId})
    }
    return await deleteBooking(matchingBookings.id);
}

const baseURL = 'http://owu.linkpc.net/carsAPI/v1';

const cars = '/cars';

const endPoints = {
    cars:{
        cars: cars,
        byId: (id: string): string => `${cars}/${id}`,
    }
};

export {
    baseURL,
    endPoints
};

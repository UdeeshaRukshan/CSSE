class AppointmentObserver {
    constructor() {
        this.subscribers = [];
    }

    subscribe(callback) {
        this.subscribers.push(callback);
    }

    notify(data) {
        this.subscribers.forEach(callback => callback(data));
    }
}

module.exports = new AppointmentObserver();

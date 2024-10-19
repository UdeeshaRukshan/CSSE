class PatientFacade {

    async getTodaysAppointments(doctorId: string) {
        const response = await fetch(`http://localhost:4000/api/doctorappointment/doctor/${doctorId}/today-appointments`);
        return response;
      }
    
}

export default new PatientFacade();
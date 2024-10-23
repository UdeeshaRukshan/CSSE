 'use client'

import React from 'react';
import {
  User,
  Mail,
  Stethoscope,
  Award,
  Building2,
  GenderMale,
  BadgeCheck,
} from 'lucide-react';

const ProfileField = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
    <Icon className="w-6 h-6 text-blue-600" />
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

const Profile = () => {
  const doctorData = {
    _id: "6712915340cc48e7c37d2f55",
    fullName: "Dr. Dilshan Perera",
    gender: "Male",
    email: "dr.dilshanperera@example.com",
    yearsOfExperience: 15,
    specialization: "Cardiology",
    licenseNumber: "LIC12345HAI",
    workplace: "Colombo General Hospital"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-blue-600 px-6 py-8 text-white">
          <h1 className="text-3xl font-bold text-center">Doctor Profile</h1>
        </div>
        
        <div className="p-8 space-y-6">
          <ProfileField icon={User} label="Full Name" value={doctorData.fullName} />
          <ProfileField icon={GenderMale} label="Gender" value={doctorData.gender} />
          <ProfileField icon={Mail} label="Email" value={doctorData.email} />
          <ProfileField icon={Award} label="Years of Experience" value={`${doctorData.yearsOfExperience} years`} />
          <ProfileField icon={Stethoscope} label="Specialization" value={doctorData.specialization} />
          <ProfileField icon={BadgeCheck} label="License Number" value={doctorData.licenseNumber} />
          <ProfileField icon={Building2} label="Workplace" value={doctorData.workplace} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

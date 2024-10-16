import Image from "next/image";
import Link from "next/link";
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import axios from "axios";

const AdminPage = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/appointment`);
    const appointments = response;

    console.log(appointments); // Log the entire response for debugging

    // Ensure appointments have the expected structure
    const scheduledCount = appointments.scheduledCount || 0;
    const pendingCount = appointments.pendingCount || 0;
    const cancelledCount = appointments.cancelledCount || 0;
    const documents = appointments.documents || []; // Default to an empty array

    return (
      <div className="mx-auto flex max-w-7xl flex-col space-y-14">
        <header className="admin-header">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/logo-full.svg"
              height={32}
              width={162}
              alt="logo"
              className="h-8 w-fit"
            />
          </Link>
          <p className="text-16-semibold">Admin Dashboard</p>
        </header>

        <main className="admin-main">
          <section className="w-full space-y-4">
            <h1 className="header">Welcome 👋</h1>
            <p className="text-dark-700">
              Start the day with managing new appointments
            </p>
          </section>

          <section className="admin-stat">
            <StatCard
              type="appointments"
              count={scheduledCount}
              label="Scheduled appointments"
              icon={"/assets/icons/appointments.svg"}
            />
            <StatCard
              type="pending"
              count={pendingCount}
              label="Pending appointments"
              icon={"/assets/icons/pending.svg"}
            />
            <StatCard
              type="cancelled"
              count={cancelledCount}
              label="Cancelled appointments"
              icon={"/assets/icons/cancelled.svg"}
            />
          </section>

          <DataTable columns={columns} data={documents} />
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return (
      <div>Error fetching appointments. Please try again later.</div>
    );
  }
};

export default AdminPage;

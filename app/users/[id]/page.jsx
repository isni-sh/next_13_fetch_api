import { Suspense } from "react";
import User from "@/app/partials/User";
import Link from "next/link";

const UserDetail = ({ params: { id } }) => {
  return (
    <div className="container">
      <Link href="/users">Go back</Link>
      <Suspense fallback={<div>Loading User...</div>}>
        <User id={id} />
      </Suspense>
    </div>
  );
};

export default UserDetail;

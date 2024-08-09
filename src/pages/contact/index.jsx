import React from "react";
import Contact from "../../components/contactItems";
import Header from "../../components/header";

function ContactPage() {
  return (
    <main>
      <Header title="Say hi !"></Header>
      <div className="flex flex-col max-w-[80rem]  mx-auto  h-full justify-center items-center pt-[17rem]">
        <Contact></Contact>
      </div>
    </main>
  );
}

export default ContactPage;

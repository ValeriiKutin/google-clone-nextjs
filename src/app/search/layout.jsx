import SearchHearder from "@/components/SearchHearder";
import "./../globals.css";

export default function layout({ children }) {
  return (
    <div>
      <SearchHearder />
      {children}
    </div>
  );
}

import Card from "./Card";
import "./CardSection.css";
import data from "./data.json";

export default function CardSection() {
  return (
    <div className="cardSection">
      {data["profiles"].map((profile) => {
        return <Card profileContent={profile} />;
      })}
    </div>
  );
}

type Service = {
  division: string;
  title: string;
  items: { label: string; value: string }[];
};

export default function ServiceBlock({ service }: { service: Service }) {
  return (
    <div className="service-block">
      <div className="service-header">
        <span>Division {service.division}</span>
        <h3>{service.title}</h3>
      </div>
      <div className="service-content">
        <ul className="service-list">
          {service.items.map((item, idx) => (
            <li key={idx}>
              <span>{item.label}</span>
              <span className="text">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
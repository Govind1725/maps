export function ServiceBody({ service }) {
  return service.groups.map((group, groupIndex) => (
    <div className={group.title ? "service-subgroup" : "service-group"} key={`${service.id}-${group.title || groupIndex}`}>
      {group.title ? <h4>{group.title}</h4> : null}
      <div className="service-columns" style={{ "--columns": group.columns.length }}>
        {group.columns.map((items, columnIndex) => (
          <ul
            className={`service-list${items.length > 26 ? " service-list--dense" : ""}`}
            key={`${service.id}-${columnIndex}`}
          >
            {items.map((item, itemIndex) => <li key={`${item}-${itemIndex}`}>{item}</li>)}
          </ul>
        ))}
      </div>
    </div>
  ));
}

export default ServiceBody;

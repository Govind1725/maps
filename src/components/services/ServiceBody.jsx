export default function ServiceBody({ service }) {
  return (
    <>
      {service.groups.map((group, index) => (
        <div className={group.title ? "service-subgroup" : "service-group"} key={`${service.id}-${index}`}>
          {group.title ? <h4>{group.title}</h4> : null}
          <div className="service-columns" style={{ "--columns": group.columns.length }}>
            {group.columns.map((column, columnIndex) => (
              <ul className="service-list" key={`${service.id}-${index}-${columnIndex}`}>
                {column.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

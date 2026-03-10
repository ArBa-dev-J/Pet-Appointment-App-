function UserApointmentSearch({
  changeSortASC,
  changeSortDESC,
  changeSortDATEDESC,
  changeSortDATEASC,
  nameChange,
}) {


  return (
    <>
      <section className="flex justify-center">
        <div>
          <input onChange={nameChange} type="text" className="border " />
        </div>
        <div>
          <select className="border-r border-t border-b h-[0.7cm]">
            <option onClick={() => changeSortDESC()} value="DESC">descending</option>
            <option onClick={() => changeSortASC()} value="ASC">ascending</option>
            <option onClick={() => changeSortDATEDESC()} value="DATEDESC">Date descending</option>
            <option onClick={() => changeSortDATEASC()} value="DATEASC">Date ascending</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default UserApointmentSearch;

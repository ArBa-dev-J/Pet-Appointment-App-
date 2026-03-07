function UserApointmentSearch() {
    return (
        <>
            <section className="flex justify-center">
                <div>
                    <input type="text" className="border " />
                </div>
                <div>
                    <select className="border-r border-t border-b h-[0.7cm]">
                        <option value="DESC">descending</option>
                        <option value="ASC">ascending</option>
                        <option value="DATEDESC">Date  descending</option>
                        <option value="DATEASC">Date ascending</option>
                    </select>
                </div>
            </section>
        </>
    );
}

export default UserApointmentSearch;
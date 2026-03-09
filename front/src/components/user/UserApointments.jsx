function UserApointments({ appointment }) {
  return (
    <>
      <div className="border">
        <h1 className="p-2">{appointment.name}</h1>
        <p className="p-2">yyyy-mm-dd hh-mm</p>
        <p className="p-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
          reiciendis, beatae dolore ratione quae placeat numquam minus ex fugiat
          voluptate, quidem ab autem velit nostrum molestias veritatis.
          Exercitationem, qui unde.
        </p>
        <p className="p-2">Is not confirmed</p>
      </div>
    </>
  );
}

export default UserApointments;

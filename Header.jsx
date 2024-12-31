function Header()
{
    let Name="Faizaan Patel";
    let student={
        id:101,
        name:"Faizaan"
    }
    return(
        <div>
        <h1>Header Component {Name}</h1>
        <p>Student ID : {student.id}</p>
        <p>Student Name : {student.name}</p>
        </div>
    );
}
export default Header;


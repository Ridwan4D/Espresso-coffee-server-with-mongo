import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeesCard = ({ coffee ,coffees,setCoffees}) => {
  //   console.log(coffee);
  const { _id, name, image, supplier, price } = coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCoffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                icon: "success",
              });
              const remainingCoffees = coffees.filter(coffee => coffee._id !== _id)
              setCoffees(remainingCoffees)
            }
          });
      }
    });
  };
  return (
    <div>
      <section className="bg-[#F5F4F1] dark:bg-gray-100 dark:text-gray-800 py-4 rounded-lg">
        <div className="flex flex-col mx-auto lg:flex-row">
          <div
            className="w-full lg:w-1/3"
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="flex flex-col w-full py-6 lg:w-2/3 md:py-8 pr-8 space-y-2">
            <div className="flex justify-between">
              <h2 className="text-base text-[#5C5B5B]">
                <span className="font-medium text-[#1B1A1A]">Name:</span> {name}
              </h2>
              <Link className="bg-[#D2B48C] p-1.5 rounded-md text-white">
                <FaEye />
              </Link>
            </div>
            <div className="flex justify-between">
              <h2 className="text-base text-[#5C5B5B]">
                <span className="font-medium text-[#1B1A1A]">Supplier:</span>{" "}
                {supplier || "Some One"}
              </h2>
              <Link to={`/updateCoffee/${_id}`} className="bg-[#3C393B] p-1.5 rounded-md text-white">
                <MdEdit />
              </Link>
            </div>
            <div className="flex justify-between">
              <h2 className="text-base text-[#5C5B5B]">
                <span className="font-medium text-[#1B1A1A]">Price:</span>{" "}
                {price}
              </h2>
              <button
                onClick={() => handleDelete(_id)}
                className="bg-[#EA4744] p-1.5 rounded-md text-white"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
CoffeesCard.propTypes = {
  coffee: PropTypes.object,
};
export default CoffeesCard;

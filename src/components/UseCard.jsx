import { IconArrowsMinimize } from "@tabler/icons-react";
import { Toaster, toast } from "sonner";

const UseCard = ({
  showModalUser,
  onCloseModal,
  register,
  handleSubmit,
  createUser,
  editUser,
  isUdating,
}) => {
  const submit = (currenUser) => {
    isUdating ? editUser(currenUser) : createUser(currenUser);
  };

  const titleModal = isUdating ? "Editar usuario" : "Nuevo usuario";
  const buttonModal = isUdating ? "Guardar cambios" : "Agregar nuevo usuario";

  return (
    <section
      className={`fixed bg-black/60 top-0 right-0 left-0 h-screen transition-all flex justify-center items-center ${
        showModalUser ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="grid gap-4 bg-white p-4 rounded-md relative sm:w-96"
      >
        <h5 className="font-bold text-lg sm:text-xl"> {`${titleModal}`} </h5>
        <button
          onClick={onCloseModal}
          type="button"
          className="absolute top-5 right-5 hover:text-red-500 transition-colors"
        >
          <IconArrowsMinimize size={20} />
        </button>
        <label className="grid gap-1">
          <span className="text-sm font-semibold">
            Nombre <span className="text-red-500">*</span>
          </span>
          <input
            className="bg-[#F9FAFC] border rounded-md p-1 outline-none"
            type="text"
            {...register("first_name")}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-semibold">
            Apellidos <span className="text-red-500">*</span>
          </span>
          <input
            className="bg-[#F9FAFC] border rounded-md p-1 outline-none"
            type="text"
            {...register("last_name")}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-semibold">
            Correo <span className="text-red-500">*</span>
          </span>
          <input
            className="bg-[#F9FAFC] border rounded-md p-1 outline-none"
            type="email"
            {...register("email")}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-semibold">
            Contraseña <span className="text-red-500">*</span>
          </span>
          <input
            className="bg-[#F9FAFC] border rounded-md p-1 outline-none"
            type="password"
            {...register("password")}
          />
        </label>
        <label className="grid gap-1">
          <span className="text-sm font-semibold">Cumpleaños</span>
          <input
            className="bg-[#F9FAFC] border rounded-md p-1 outline-none"
            type="date"
            {...register("birthday")}
          />
        </label>
        <Toaster duration={8000} />
        <button
          onClick={() => toast.success("El usuario ha sido creado con éxito!")}
          type="submit"
          className="bg-[#555A88] text-white font-semibold p-2 rounded-md hover:bg-[#767bb9] transition-all "
        >
          {`${buttonModal}`}
        </button>
      </form>
    </section>
  );
};
export default UseCard;

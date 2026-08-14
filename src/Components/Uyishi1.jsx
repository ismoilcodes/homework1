import { useState } from "react";
import { useForm } from "react-hook-form";

function Uyishi1() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    function onSubmit(value) {
        setLoading(true);

        setTimeout(() => {
            setData(value);
            setLoading(false);
        }, 2000);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Add Product
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >

                    <div>
                        <input
                            {...register("name", {
                                required: "Nomini kiriting"
                            })}
                            placeholder="Product name"
                            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register("img", {
                                required: "Rasm URL kiriting"
                            })}
                            placeholder="Img URL"
                            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                        />

                        {errors.img && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.img.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <input
                            type="number"
                            {...register("price", {
                                required: "Narxini kiriting"
                            })}
                            placeholder="Price"
                            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
                        />

                        {errors.price && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.price.message}
                            </p>
                        )}
                    </div>

                    <button
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold"
                    >
                        {loading ? "Yuklanmoqda..." : "Submit"}
                    </button>

                </form>

                {data && !loading && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl border">

                        <h3 className="font-bold text-lg mb-3">
                            Ma'lumotlar:
                        </h3>

                        <p>
                            <b>Nomi:</b> {data.name}
                        </p>

                        <p>
                            <b>Narxi:</b> ${data.price}
                        </p>

                        <img
                            src={data.img}
                            alt="Product"
                            className="w-full h-48 object-cover rounded-lg mt-3"
                        />

                    </div>
                )}

            </div>
        </div>
    );
}

export default Uyishi1;
import { Dialog } from "@headlessui/react";
import axios from "axios";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import { JoinWaitListSchema } from "@components/modules/schemas/JoinWaitListSchema";

import { ButtonProperties } from "@shared/libs/helpers";

interface JoinWaitListProps {
  setThankYou: Function;
  setJoinWaitList: Function;
}
const JoinWaitList = ({ setThankYou, setJoinWaitList }: JoinWaitListProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialState = {
    name: "",
    email: "",
    country: "",
  };

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    setLoading(true);
    try {
      const res = await axios.post("http://44.202.80.97/subscribe", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.data.success === true) {
        setJoinWaitList(false);
        setThankYou(true);
      } else {
        toast.error("An error occurred!");
        setLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred");
      setLoading(false);
    }
  };

  interface Values {
    name: string;
    email: string;
    country: string;
  }

  return (
    <div className="flex flex-col justify-center rounded-2xl items-center bg-waitList bg-no-repeat bg-cover bg-center w-[41.75rem] h-[40.5rem]">
      <Toaster position="top-center" />
      <div className="flex items-center">
        <Dialog.Title as="h4" className="mb-4 -ml-32  capitalize text-md tablet:text-[1.875rem] whitespace-nowrap font-semibold mt-8">
          Get Notified
        </Dialog.Title>
        <Icon className="ml-4 w-[40%] tablet:w-full tablet:ml-8 mt-6" name="yellowLine" />
      </div>
      <p className="capitalize text-md tablet:text-[1.875rem] -ml-16">
        when <span className="text-crypYellow-200">we launch</span>
      </p>
      <div className="w-full p-8">
        <div className="">
          <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={JoinWaitListSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="w-[80%] pl-8 mt-8">
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px]"
                    container="!bg-transparent text-white !px-0"
                    inputClassName="!bg-transparent placeholder:!font-medium placeholder:!text-base placeholder:!text-gray-400"
                    name="name"
                    placeholder="Enter your firstname here"
                    type="text"
                  />
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px] mt-12"
                    container="!bg-transparent text-white !px-0"
                    inputClassName="!bg-transparent placeholder:!font-medium !text-base placeholder:!text-gray-400"
                    name="email"
                    placeholder="Enter your email address here"
                    type="email"
                  />
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px] mt-12"
                    container="!bg-transparent text-white !px-0"
                    inputClassName="!bg-transparent placeholder:!font-medium !text-base placeholder:!text-gray-400"
                    name="country"
                    placeholder="What country are you from? (Optional)"
                    type="text"
                  />
                </div>
                <div className="bg-citiBlue-200 text-center mt-16 rounded-md w-[10.25rem] tablet:w-[8.809rem] ml-[30%]">
                  <CustomButton
                    customClass="!w-full font-14 rounded-md uppercase h-[3.75rem] tablet:h-[3.671rem]"
                    handleClick={() => {}}
                    isDisabled={loading}
                    isSubmitting={loading}
                    size={ButtonProperties.SIZES.small}
                    title="notify me"
                    type="submit"
                    variant={ButtonProperties.VARIANT.primary.name}
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>{" "}
    </div>
  );
};

export default JoinWaitList;

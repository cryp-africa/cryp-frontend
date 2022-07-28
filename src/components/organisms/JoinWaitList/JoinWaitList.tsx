import { Dialog } from "@headlessui/react";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import React, { useState } from "react";

import CustomButton from "@components/atoms/CustomButton/CustomButton";
import FormikCustomInput from "@components/atoms/FormikCustomInput/FormikCustomInput";
import Icon from "@components/atoms/Icons";
import { JoinWaitListSchema } from "@components/modules/schemas/JoinWaitListSchema";

import { ButtonProperties } from "@shared/libs/helpers";

const JoinWaitList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const initialState = {
    firstName: "",
    email: "",
  };

  const handleSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    setLoading(true);
  };

  interface Values {
    firstName: string;
    email: string;
  }

  return (
    <div className="flex flex-col justify-center rounded-2xl items-center bg-waitList bg-no-repeat bg-cover bg-center">
      <div className="flex items-center">
        <Dialog.Title as="h4" className="mb-4 capitalizr text-[2.313rem] whitespace-nowrap font-semibold mt-8">
          Get Notified
        </Dialog.Title>
        <Icon className="ml-8 mt-6" name="yellowLine" />
      </div>
      <p className="capitalize text-[2.313rem] ml-8">
        when <span className="text-crypYellow-200">we launch</span>
      </p>
      <div className="w-full p-8">
        <div className="">
          <Formik initialValues={initialState} onSubmit={handleSubmit} validationSchema={JoinWaitListSchema}>
            {(props: FormikProps<Values>) => (
              <Form>
                <div className="mt-8">
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px]"
                    container="!bg-transparent text-white"
                    inputClassName="!bg-transparent placeholder:!font-medium placeholder:!text-base placeholder:!text-gray-400"
                    name="firstName"
                    placeholder="Enter your firstname here"
                    type="text"
                  />
                  <FormikCustomInput
                    className="!inline-block !border-b-[1px] mt-16"
                    container="!bg-transparent text-white"
                    inputClassName="!bg-transparent placeholder:!font-medium !text-base placeholder:!text-gray-400"
                    name="email"
                    placeholder="Enter your email address here"
                    type="email"
                  />
                </div>

                <div className="bg-citiBlue-200 text-center mt-16 rounded-md w-[12rem] mx-auto">
                  <CustomButton
                    customClass="!w-full font-14 rounded-md uppercase h-[5rem]"
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

import { ErrorProps } from "../types/GeneralTypes";

const ErrorMessage: React.FC<ErrorProps> = (props: ErrorProps) => {
    return (
        <section className="w-full my-44 flex justify-center items-center flex-col">
            <p className="font-bold text-3xl">Error {props.message}</p>
        </section>
    )
}

export default ErrorMessage;
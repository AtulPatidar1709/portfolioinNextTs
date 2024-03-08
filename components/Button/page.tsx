import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
type buttonProps = {
    title: String;
    svgLink : any;
    liveLink : Url;
}

export default function Button(
    { title , svgLink , liveLink }: buttonProps) {
    return (
        <Link href={liveLink} className="button">
            <Image src={svgLink} width={15} height={13} alt="btnsvg" />
            <p className="text">{title}</p>
        </Link>
    )
}

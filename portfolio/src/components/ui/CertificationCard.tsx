import { CertificationsButton } from "./Buttons";

export default function CertificationsCard(certificationsProps: { Title: string, Issuer: string, Year: string, CertUrl: string }) {
    return (
        <div className="certCard mt-8 border-b border-b-white">
            <h2 className="font-lexend text-[22px] font-normal py-1">{certificationsProps.Title}</h2>
            <h3 className="font-lexend text-[18px] font-light text-[#8f8f8f] py-1">{certificationsProps.Issuer}</h3>
            <CertificationsButton CertUrl={certificationsProps.CertUrl} />
            <div className="time mt-2 flex flex-row items-center justify-end gap-4">
                <p className="font-lexend w-[160px] rounded-t-[8px] text-[14px] font-normal text-center text-[#0a0a0a] bg-white">{certificationsProps.Year}</p>
            </div>
        </div>
    );
}


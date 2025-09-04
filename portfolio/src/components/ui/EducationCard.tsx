export default function EducationCard(educationProps: { Institution: string, Degree: string, Time: string, Grade?: string, Percentage?: string }) {
    return (
        <div className="eduCard  mt-8 border-b border-b-white">
            <h2 className="font-lexend text-[22px] font-normal py-1">{educationProps.Institution}</h2>
            <h3 className="font-lexend text-[18px] font-light text-[#8f8f8f] py-1">{educationProps.Degree}</h3>
            {educationProps.Grade && (
                <p className="font-jetBrains-mono text-[16px] font-medium text-[#ffffff] py-1">Grade: {educationProps.Grade}</p>
            )}
            {educationProps.Percentage && (
                <p className="font-jetBrains-mono text-[16px] font-medium text-[#ffffff] py-1">Percentage: {educationProps.Percentage}</p>
            )}
            <div className="time mt-2 flex flex-row items-center justify-end gap-4">
                <p className="font-lexend w-[160px] rounded-t-[8px] text-[14px] font-normal text-center text-[#0a0a0a] bg-white">{educationProps.Time}</p>
            </div>
        </div>
    );
}
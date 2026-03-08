import React from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Tutor} from "@/components/calendar/types";
import {cn} from "@/lib/utils";
import {useTranslations} from "next-intl";
import {useSidebar} from "@/components/ui/sidebar";

interface TutorAvatarsProps {
  tutors: Tutor[],
  selectedTutorId: number | null,
  onTutorSelect: (tutorId: number | null) => void,
  disabled?: boolean,
  setBooked?: (showBookedSessions: boolean) => void
}

export const TutorAvatars: React.FC<TutorAvatarsProps> = ({
                                                            tutors,
                                                            selectedTutorId,
                                                            onTutorSelect,
                                                            disabled,
                                                           setBooked
                                                          }) => {
  const t = useTranslations("calendar.controls")
  const {isMobile} = useSidebar()
  return (
    <div className="flex items-center">
      <div className="flex items-end gap-2">
        {/* Show All Tutors Button */}
        <Button
          variant={"link"}
          size="sm"
          onClick={() => {onTutorSelect(null); setBooked(false);}}
          className={"p-0 text-sm flex items-end hover:no-underline cursor-pointer w-24"}
        >
            <span className={cn(
              "text-sm text-muted-foreground text-center max-w-32 truncate",
              selectedTutorId === null && !disabled && "text-indigo-500 font-semibold"
            )}>
              {t("show-all")}
            </span>
          <div className={cn(
            "w-full max-w-24 translate-y-[1px] h-[2px] bg-indigo-500 absolute bottom-0 opacity-0 transition-opacity duration-300",
            selectedTutorId === null && !disabled && "opacity-100",
          )}/>
        </Button>
        {/* Individual Tutor Avatars */}
        <div className={"flex flex-row lg:gap-1 items-center justify-center"}>
        {tutors.map((tutor, index) => (
          <Button
            key={tutor.id}
            size="sm"
            variant={"link"}
            onClick={() => {onTutorSelect(tutor.id); setBooked(false);}}
            className={"relative h-fit w-fit lg:w-36 p-0 rounded-full flex flex-row items-center justify-center translate-y-2 gap-2 hover:no-underline cursor-pointer"}
          >
            <Avatar className="h-8 w-8 rounded-full border-[1px] border-white lg:border-none" style={{
              translate: isMobile ? (-index*10).toString()+"px": "none",
              zIndex: index
            }}>
              <AvatarImage src={tutor.avatar} alt={tutor.name}/>
              <AvatarFallback className="text-base bg-foreground/50 text-background">
                {tutor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className={cn(
              "hidden capitalize lg:block text-sm text-muted-foreground text-center truncate",
              selectedTutorId === tutor.id && !disabled && "text-indigo-500 font-semibold"
            )}>
              {tutor.name.split(" ")[0]}
            </span>
            <div style={{
              translate: isMobile ? (-index*10).toString()+"px": "none",
            }} className={cn(
              "w-full translate-y-[1px] h-[2px] bg-indigo-500 absolute -bottom-[11px] opacity-0 transition-opacity duration-300",
              selectedTutorId === tutor.id && !disabled && "opacity-100",
            )}/>
            <div style={{
              translate: isMobile ? (-index*10).toString()+"px": "none",
            }} className={cn(
              "lg:hidden capitalize text-xs whitespace-nowrap text-indigo-500 absolute -bottom-8 opacity-0 transition-opacity duration-300",
              selectedTutorId === tutor.id && !disabled && "opacity-100",
              // Position from right for last 2 tutors to prevent overflow off screen
              index >= tutors.length - 2 ? "right-0" : "left-0"
            )}>
              {tutor.name.split(" ")[0]}
            </div>
          </Button>
        //   <div style={{
        //   translate: isMobile ? (-index*10).toString()+"px": "none",
        // }} className={cn(
        //   "w-full lg:hidden overscroll-y-auto max-w-10 lg:max-w-32 translate-y-[1px] text-indigo-500 h-[2px] absolute -bottom-4 opacity-0 transition-opacity duration-300",
        //   selectedTutorId === tutor.id && !disabled && "opacity-100",
        // )}>
        //   {tutor.name.split(" ")[0]}
        // </div>
        ))}
        </div>
      </div>
    </div>
  );
};

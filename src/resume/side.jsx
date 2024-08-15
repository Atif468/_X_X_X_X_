import * as React from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LinkIcon from "@mui/icons-material/Link";
import SchoolIcon from "@mui/icons-material/School";
import SourceIcon from "@mui/icons-material/Source";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BadgeIcon from "@mui/icons-material/Badge";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate(); // React Router hook for navigation

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue); // Navigate to the selected route
  };

  return (
    <BottomNavigation
      sx={{ width: 745, zIndex: 10, position: "fixed", bottom: 0 }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Links" value="/LinkForm" icon={<LinkIcon />} />
      <BottomNavigationAction label="Profile" value="/IntroductionForm" icon={<AccountBoxIcon />} />
      <BottomNavigationAction label="Education" value="/EducationForm" icon={<SchoolIcon />} />
      <BottomNavigationAction label="Projects" value="/ProjectForm" icon={<SourceIcon />} />
      <BottomNavigationAction label="Skills" value="/SkillsForm" icon={<CodeIcon />} />
      <BottomNavigationAction label="Awards" value="/AchievementForm" icon={<EmojiEventsIcon />} />
      <BottomNavigationAction label="Certificate" value="/CertificateForm" icon={<BadgeIcon />} />
    </BottomNavigation>
  );
}

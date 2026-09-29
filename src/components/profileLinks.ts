import { Github, Linkedin, type LucideIcon } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const profileLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: personalInfo.linkedinUrl, label: 'LinkedIn', Icon: Linkedin },
  { href: personalInfo.githubUrl, label: 'GitHub', Icon: Github },
];

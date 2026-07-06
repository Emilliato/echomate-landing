import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  highlighted: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Served directly from this same public Pages site (public/echomate-release.apk)
  // so it works regardless of the private echomate repo's visibility. This
  // is a manual copy, not wired to CI — swap in a Play Store link once
  // published, or point back at a public release/CDN if this file grows
  // unwieldy to keep committing by hand.
  readonly downloadUrl = 'echomate-release.apk';

  readonly currentYear = new Date().getFullYear();

  readonly modes: Feature[] = [
    {
      icon: '💡',
      title: 'Idea',
      description: 'Brainstorm out loud and get a structured idea plan — problem, angles, next steps.',
    },
    {
      icon: '💼',
      title: 'Work',
      description: 'Talk through meetings and follow-ups. Echo turns it into a clean task list.',
    },
    {
      icon: '🏋️',
      title: 'Gym',
      description: 'Narrate your training and walk away with a structured workout plan.',
    },
    {
      icon: '🚶',
      title: 'Reflection',
      description: 'Think out loud while you walk. Echo captures what matters.',
    },
  ];

  readonly features: Feature[] = [
    {
      icon: '🎙️',
      title: '4 companion voices',
      description: 'Pick the voice that fits how you like to be talked to, with a live preview before you commit.',
    },
    {
      icon: '🧭',
      title: '4 personalities',
      description: 'Supportive friend, focused coach, chill companion, or professional assistant — Echo adapts its tone, not just its voice.',
    },
    {
      icon: '📝',
      title: 'AI-generated notes',
      description: 'Every session becomes a structured note — summary, key ideas, tags — automatically.',
    },
    {
      icon: '✅',
      title: 'Action plans, not just notes',
      description: 'Gym sessions become workout plans. Ideas become next steps. Work becomes tasks.',
    },
    {
      icon: '📱',
      title: 'Keeps listening, minimized',
      description: 'Start a session, lock your phone or switch apps — Echo keeps recording in the background.',
    },
    {
      icon: '🔒',
      title: 'Session-capped, on your terms',
      description: 'Every plan has clear session and time limits, so you always know what you’re using.',
    },
  ];

  readonly pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      price: 'R0',
      period: '',
      tagline: 'Try EchoMate, no commitment.',
      features: ['2 sessions / month', '3 minutes per session', 'All 4 voices & personalities', '1 default companion voice'],
      highlighted: false,
    },
    {
      name: 'Plus',
      price: 'R99',
      period: '/mo',
      tagline: 'For regular check-ins.',
      features: ['23 sessions / month', '5 minutes per session', 'All companion modes', 'Priority support'],
      highlighted: true,
    },
    {
      name: 'Pro',
      price: 'R199',
      period: '/mo',
      tagline: 'For daily voice journaling.',
      features: ['35 sessions / month', '7 minutes per session', 'All companion modes', 'Priority support'],
      highlighted: false,
    },
  ];
}

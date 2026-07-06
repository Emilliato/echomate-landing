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
  // Points at the rolling "latest-apk" GitHub Release created by the
  // echomate repo's build workflow. That repo is currently private, so
  // this link won't resolve for anonymous visitors until the repo is made
  // public (or the APK is mirrored somewhere public, e.g. your own domain
  // or a Play Store listing once published) — swap this constant once you
  // have a permanent public download location.
  readonly downloadUrl =
    'https://github.com/Emilliato/echomate/releases/download/latest-apk/echomate-release.apk';

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

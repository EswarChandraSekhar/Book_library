import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookDetailService {

  booksContent = [
    {
      bookId: 1,
      indexContent: [
        "The Prophecy Awakens",
        "Chronicles of Lord Vishnu",
        "The Secret Experiments",
        "Time Travel and Ancient Sages",
        "The Rise of Pralay",
        "The Myth of Immortality",
        "The Third Eye Activation",
        "Encounters with Devas and Asuras",
        "The Agyaatvaas of Om Shastri",
        "Genetics of the Saptrishis",
        "Secrets of the Himalayas",
        "The Battle of Dharma vs Adharma",
        "The Trishul Protocol",
        "Modern Science Meets Mythology",
        "The Truth Beyond Time"
      ]
    },
    {
      bookId: 2,
      indexContent: [
        "Welcome to the Winchester House",
        "The First Red Flag",
        "Secrets Behind the Locked Door",
        "Whispers at Midnight",
        "The Diary Discovery",
        "When Lies Begin to Unfold",
        "The Housemaid's Dark Past",
        "An Unexpected Ally",
        "Trapped in Silence",
        "The Hidden Room",
        "The Escape Plan",
        "Face to Face with the Truth",
        "A Twist in the Tale",
        "Justice or Revenge?",
        "New Beginnings, New Shadows"
      ]
    },
    {
      bookId: 3,
      indexContent: [
        "Understanding the Mind",
        "The Power of Thoughts",
        "Overcoming Negative Emotions",
        "Mastering Inner Dialogue",
        "The Role of Spirituality in Mental Health",
        "Cultivating Self-Awareness",
        "Balancing the Heart and Mind",
        "Tools for Mental Rejuvenation",
        "Mindfulness in Daily Life",
        "Gratitude as a Mindset",
        "Controlling Impulses and Desires",
        "Dealing with Stress and Anxiety",
        "Purpose-Driven Living",
        "Building Emotional Resilience",
        "The Journey Toward Inner Peace"
      ]
    }
  ];

  constructor() { }

  
}

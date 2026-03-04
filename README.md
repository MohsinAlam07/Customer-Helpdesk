১️. JSX হলো React-এ ব্যবহৃত একটি বিশেষ syntax যার মাধ্যমে JavaScript এর ভিতরে HTML এর মতো কোড লেখা যায়।
এটি ব্যবহার করলে UI তৈরি করা সহজ হয় এবং কোড পড়তেও সহজ হয়। React এই JSX কে পরে সাধারণ JavaScript এ রূপান্তর করে।

২️. Props হলো parent component থেকে child component-এ পাঠানো data। Props পরিবর্তন করা যায় না, এটি read-only।

State হলো component এর নিজের data যা component এর ভিতরে তৈরি হয় এবং প্রয়োজন অনুযায়ী পরিবর্তন করা যায়। State পরিবর্তন হলে component আবার render হয়।

৩️. useState হলো React-এর একটি Hook যা component এর state তৈরি এবং নিয়ন্ত্রণ করার জন্য ব্যবহার করা হয়।
এটি দুইটি জিনিস দেয় একটি state value এবং একটি function যা দিয়ে সেই state পরিবর্তন করা যায়। State পরিবর্তন হলে component আবার render হয়।

৪️. React-এ state share করার সাধারণ উপায় হলো parent component এ state রাখা এবং props এর মাধ্যমে child component-এ পাঠানো।
এই পদ্ধতিকে সাধারণত Lifting State Up বলা হয়।

৫️. React-এ event handling JavaScript function ব্যবহার করে করা হয়।
এখানে event এর নাম camelCase আকারে লেখা হয়, যেমন onClick, onChange, onSubmit ইত্যাদি।
যখন কোনো event ঘটে, তখন নির্দিষ্ট function কল হয় এবং সেই অনুযায়ী কাজ সম্পন্ন হয়।
/* =====================================================================
   Revision data — Legal English: The UK Legal System
   Course by Florence Thépot (L2). Extracted from the Obsidian notes
   (Sources of law / The Courts / People in courts).

   Entries are grouped BY CHAPTER (field "th"), in course order
   (see window.THEME_ORDER below).

   Each entry:
     t  : type  -> "case" (case law) | "stat" (statute/Act) | "concept" (notion/doctrine) | "inst" (institution/actor)
     th : theme -> chapter name (used for filtering)
     r  : reference (front of the flashcard)
     m  : meaning (back of the flashcard)

   To add an entry, copy a line and adapt it, then reopen index.html.
   ===================================================================== */

window.THEME_ORDER = [
  "Sources · Case law & precedent",
  "Sources · Legislation & interpretation",
  "Sources · International (ECHR & EU)",
  "Sources · Custom & soft law",
  "Sources · Equity",
  "Courts · Structure & classification",
  "Courts · Criminal justice",
  "Courts · Civil justice",
  "Courts · Appeals",
  "People · The jury",
  "People · The judiciary",
  "People · Lawyers (solicitors & barristers)"
];

window.REPERTOIRE = [

/* ============ SOURCES OF LAW ============ */
/* --- Case law & precedent --- */
{t:"concept", th:"Sources · Case law & precedent", r:"Common law", m:`A legal system based on case law: the law derives from the previous decisions of the courts, not only from Parliament (contrast: the civil / continental system). England is a common-law system.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Case law", m:`The law as established by the outcome of previous cases — a body of judicial decisions that has a binding effect through precedent.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Rule of precedent", m:`Courts must follow the legal principles laid down in previous decisions of higher courts; it critically depends on there being a hierarchy of courts.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Stare decisis", m:`"Let the decision stand": the doctrine of binding precedent. It operates vertically (higher courts bind lower ones) and horizontally (a court binds itself).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Ratio decidendi", m:`"The reason for deciding": the rule of law on which the decision is based and treated as a necessary step to the conclusion — the only binding part of a precedent (Goodhart: material facts + decision).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Obiter dictum (obiter dicta)", m:`"Said in passing": a judicial statement that does not affect the outcome; not binding, but it may be persuasive (especially from the Supreme Court).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Distinguishing", m:`A way of avoiding a precedent: showing that the material facts of the present case differ, so the earlier ratio does not apply. The judge should explain why.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Overruling", m:`When a higher court decides that the law stated in an earlier, different case (by a lower court) is wrong and no longer the law; its effect is retrospective.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Reversing", m:`When a higher court overturns the decision of the lower court in the same case (on appeal).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Per incuriam", m:`"Through lack of care": a decision made in ignorance of a relevant statute or binding precedent — an exception allowing a court not to follow it.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Declaratory theory", m:`The theory that judges do not make law but merely declare what the law has always been (Blackstone, Coke, Hale). Criticised by Lord Reid ("a fairy tale") and Lord Denning.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Retrospective effect (of precedent)", m:`Because judges are said only to declare the law, case law applies to past situations as well as future ones (a key issue in R v R).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Prospective overruling", m:`Overruling that would apply only to future cases. It does not exist in England (controversial; suggested as more ECHR-compatible in CR v UK).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Neighbour principle", m:`(Lord Atkin, Donoghue v Stevenson) You must take reasonable care to avoid acts/omissions likely to injure your "neighbour" — persons closely and directly affected. Foundation of the duty of care in negligence.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Law report", m:`"A record of a judicial decision on a point of law which sets a precedent." Essential so that precedents can be known and followed.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Case citation", m:`e.g. Horton v Sadler [2007] 1 AC 307: party names (v) / year + volume / report series abbreviation (AC) / page number.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Neutral citation", m:`A court-assigned citation independent of any report series — e.g. [2005] EWCA Civ 101 (101st case of 2005, Court of Appeal, Civil Division); [2025] UKSC 10.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Year Books", m:`The earliest known law reports (13th c., reign of Edward I, to 1535); they reported important rather than typical cases.`},
{t:"inst", th:"Sources · Case law & precedent", r:"Incorporated Council of Law Reporting (ICLR)", m:`A charity (not a state body), created 1865/1870, that publishes the official Law Reports and the Weekly Law Reports; its reports are checked by judges.`},
{t:"inst", th:"Sources · Case law & precedent", r:"The Law Reports", m:`The official, judge-checked series of reports, in four series/colours: Appeal Cases (AC), Chancery (Ch), King's/Queen's Bench (KB/QB), Family (Fam).`},
{t:"inst", th:"Sources · Case law & precedent", r:"Weekly Law Reports (WLR)", m:`Reports produced quickly by the ICLR and NOT checked by the judges; many cases later appear in the Law Reports.`},
{t:"inst", th:"Sources · Case law & precedent", r:"English Reports", m:`The collection of all private "nominate" reports between the 13th century and 1866 (178 volumes, published 1900–1932).`},
{t:"case", th:"Sources · Case law & precedent", r:"Donoghue v Stevenson [1932] AC 567", m:`HL; a snail in a ginger beer bottle. Despite no contract, the consumer could sue the manufacturer. Lord Atkin's "neighbour principle"; foundation of the modern tort of negligence.`},
{t:"case", th:"Sources · Case law & precedent", r:"Cassell v Broome [1972] AC 1027", m:`Lord Hailsham: each lower tier must "accept loyally the decisions of the higher tiers" — the hierarchical principle of precedent.`},
{t:"case", th:"Sources · Case law & precedent", r:"London Street Tramways v LCC [1898] AC 375", m:`The House of Lords was bound by its own previous decisions; only an Act of Parliament could change a settled point (the rule before 1966).`},
{t:"case", th:"Sources · Case law & precedent", r:"Practice Statement [1966] 3 All ER 77", m:`The HL/Supreme Court may depart from its own previous decisions "when it appears right to do so" — precedent is "an indispensable foundation" but too rigid an adherence may cause injustice.`},
{t:"case", th:"Sources · Case law & precedent", r:"R v Jogee [2016] UKSC 8", m:`Overruled the law on joint enterprise: the mental element for secondary liability is "intention to assist or encourage", not mere foresight (overruling Chan Wing-Siu).`},
{t:"case", th:"Sources · Case law & precedent", r:"Young v Bristol Aeroplane Co [1944] KB 718", m:`The Court of Appeal is bound by its own decisions, save three exceptions: conflicting CA decisions; conflict with the HL/UKSC; a decision made per incuriam (Lord Greene MR).`},
{t:"case", th:"Sources · Case law & precedent", r:"Davis v Johnson [1978] 2 WLR 182", m:`Lord Denning's "crusade" to free the CA from its own precedents; the House of Lords disagreed and re-affirmed the Young v Bristol Aeroplane rule.`},
{t:"case", th:"Sources · Case law & precedent", r:"R v Howe & Bannister [1987] AC 417", m:`Ratio: duress is not a defence to murder; obiter: duress is not available for attempted murder (later adopted as ratio in R v Gotts).`},
{t:"case", th:"Sources · Case law & precedent", r:"R v R [1991] UKHL 12", m:`The House of Lords overruled the "marital rape exemption" using the 1966 Practice Statement; the common law evolves with social change — illustrates the retrospective effect.`},
{t:"case", th:"Sources · Case law & precedent", r:"Holwell Securities v Hughes [1974] 1 WLR 155", m:`Distinguishing: the court did not apply the Postal Rule because the offer required acceptance "by notice in writing" (so the letter had to be received).`},

/* --- Legislation & interpretation --- */
{t:"concept", th:"Sources · Legislation & interpretation", r:"Legislation", m:`Law made by, or under powers granted by, the UK Parliament. Two branches: primary (Acts of Parliament) and secondary (delegated) legislation.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Primary legislation", m:`Law made by Parliament itself — Acts of Parliament. They are immune from challenge in the courts (British Railways Board v Pickin).`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Secondary (delegated) legislation", m:`Law made by other bodies under powers granted by Parliament; unlike Acts, it CAN be subject to judicial review.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Bill", m:`A proposal for legislation; it becomes an Act once passed by both Houses and given Royal Assent.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Public Bill", m:`A bill presented by Government ministers (drafted by parliamentary counsel) that changes the general law.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Private Member's Bill", m:`A bill introduced by an individual MP or Peer; little chance of passing but draws attention to an issue (e.g. the Abortion Act 1967).`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Green Paper / White Paper", m:`Government documents in the law-making process: a Green Paper is a consultation; a White Paper sets out policy, possibly with a draft bill.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Royal Assent", m:`The monarch's formal approval, required for a Bill (passed by both Houses) to become an Act.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"The King's Speech", m:`The "speech from the throne" with which the monarch opens each parliamentary session, outlining the government's main proposals.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Literal rule", m:`Interpretation focusing on the ordinary, grammatical/dictionary meaning of the words of a statute (Lord Diplock, Duport Steels v Sirs; Fisher v Bell).`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Golden rule", m:`Where a literal reading produces an absurdity or inconsistency, the words may be modified to avoid it (Adler v George).`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Mischief rule", m:`Interpretation informed by the purpose of the statute — what "mischief" was the Act meant to remedy? (Heydon's Case, 1564; Smith v Hughes).`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Invitation to treat", m:`In contract law, a display of goods is an invitation to treat (an invitation to make an offer), not an offer itself — central to Fisher v Bell.`},
{t:"inst", th:"Sources · Legislation & interpretation", r:"UK Parliament", m:`The legislature. Three functions: to legislate, to deal with public finance, and to scrutinise the government. Composed of the House of Commons, the House of Lords and the Crown.`},
{t:"inst", th:"Sources · Legislation & interpretation", r:"House of Commons", m:`The elected chamber (650 MPs, each for a constituency); dates from the 14th century; no formal qualifications are required to be an MP.`},
{t:"inst", th:"Sources · Legislation & interpretation", r:"House of Lords", m:`The unelected second chamber and a check on legislation; composed of Lords Temporal (hereditary peers — 92 kept after the 1999 reform — life peers, judicial peers) and Lords Spiritual (24 Church of England bishops).`},
{t:"inst", th:"Sources · Legislation & interpretation", r:"Law Commission", m:`Body established in 1965 to review the law of England & Wales and recommend reform; many public bills originate from its work.`},
{t:"stat", th:"Sources · Legislation & interpretation", r:"Parliament Acts 1911 and 1949", m:`Limit the power of the unelected House of Lords to block legislation: a bill may receive Royal Assent without the Lords' approval after a certain period (used e.g. for the Hunting Act 2004).`},
{t:"stat", th:"Sources · Legislation & interpretation", r:"Hunting Act 2004", m:`Bans hunting wild mammals with dogs; passed via the Parliament Acts despite the Lords' opposition; held lawfully enacted in R (Jackson) v AG.`},
{t:"case", th:"Sources · Legislation & interpretation", r:"Fisher v Bell [1961] 1 QB 394", m:`Literal rule: displaying a flick knife in a shop window was only an "invitation to treat", not "offering for sale" under the Offensive Weapons Act 1959 — defendant not guilty.`},
{t:"case", th:"Sources · Legislation & interpretation", r:"Adler v George [1964] 2 QB 7", m:`Golden rule: "in the vicinity of" a prohibited place was read to include being inside it, to avoid an absurd result (Official Secrets Act 1920).`},
{t:"case", th:"Sources · Legislation & interpretation", r:"Smith v Hughes [1960] 1 WLR 830", m:`Mischief rule: soliciting from a balcony/window fell within the Street Offences Act 1959, which was intended "to clean up the streets" (Lord Parker).`},
{t:"case", th:"Sources · Legislation & interpretation", r:"British Railways Board v Pickin [1974] AC 765", m:`Courts have no power to examine parliamentary proceedings for irregularity or fraud; Acts of Parliament are immune from challenge in the courts.`},
{t:"case", th:"Sources · Legislation & interpretation", r:"R (Jackson) v Attorney General [2005] UKHL 56", m:`The Hunting Act 2004 (passed via the Parliament Acts) was lawfully enacted; but the Parliament Acts cannot be used for major constitutional reform.`},
{t:"case", th:"Sources · Legislation & interpretation", r:"Magor and St Mellons v Newport Corp [1952] AC 189", m:`The House of Lords rejected Lord Denning's "filling in the gaps" approach as "a naked usurpation of the judicial function".`},

/* --- International sources (ECHR & EU) --- */
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Direct effect", m:`(EU law) Provisions sufficiently clear and precise are directly enforceable by individuals in national courts.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Indirect effect", m:`(EU law) National courts must interpret national legislation and case law, as far as possible, in conformity with relevant EU law.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Supremacy of EU law (pre-Brexit)", m:`EU law took precedence over conflicting UK domestic law (Lord Denning, Macarthys v Smith). Its supremacy ended for the future after Brexit.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Retained / assimilated EU law", m:`EU law converted into UK law by the EU (Withdrawal) Act 2018 to avoid a legal gap; renamed "assimilated law" from 2024, with its supremacy ended.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Declaration of incompatibility (HRA s.4)", m:`Where primary legislation conflicts with Convention rights, certain higher courts may declare it incompatible — but they cannot strike it down (Parliament remains sovereign).`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Vertical / horizontal effect (HRA)", m:`Vertical: individuals may enforce Convention rights against public authorities (s.6). Horizontal: rights are not directly applied between private parties, but courts develop the common law in their light (Campbell v MGN).`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Article 50 TEU", m:`The Treaty provision allowing a Member State to withdraw from the EU; triggered by the UK on 29 March 2017.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Brexit", m:`The UK's withdrawal from the EU (referendum June 2016, 51.9% leave). UK ceased to be a Member State on 1 Feb 2020; the transition period ended on 31 Dec 2020.`},
{t:"inst", th:"Sources · International (ECHR & EU)", r:"European Court of Human Rights (ECtHR)", m:`The Strasbourg court (created 1959) interpreting the ECHR. UK courts are "not bound" by it but "must take account of" its judgments (HRA s.2).`},
{t:"inst", th:"Sources · International (ECHR & EU)", r:"Council of Europe", m:`Created in 1949; the international body under which the ECHR (1950) was adopted — distinct from the European Union.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"European Convention on Human Rights (ECHR)", m:`An international treaty protecting fundamental rights, signed by the UK in 1950 and brought into UK domestic law by the Human Rights Act 1998.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"Human Rights Act 1998 (HRA)", m:`Brought the ECHR into UK law (in force 2000). Key sections: s.2 (take account of Strasbourg), s.3 (interpret compatibly "so far as possible"), s.4 (declaration of incompatibility), s.6 (public authorities must act compatibly).`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"European Communities Act 1972", m:`Gave EU law effect in the UK; repealed on "exit day" by the EU (Withdrawal) Act 2018.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"EU (Withdrawal) Act 2018", m:`Repealed the ECA 1972 and converted EU law into "retained EU law" (ss.2, 3, 6; s.8 "Henry VIII clause") to avoid a legislative gap.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"Retained EU Law (Revocation and Reform) Act 2023", m:`From 1 January 2024, ended "retained law" (now "assimilated law") and the supremacy of EU law; gave courts greater power to depart from EU case law.`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"Ghaidan v Godin-Mendoza [2004] UKHL 30", m:`HRA s.3: the Rent Act 1977 ("spouse") was read to include same-sex partners to ensure compatibility with the Convention (non-discrimination).`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"R v A [2002] 1 AC 45", m:`HRA s.3 strong interpretive obligation (applies even with no ambiguity): s.41 Youth Justice and Criminal Evidence Act 1999 read to give the judge discretion to admit evidence (Article 6, fair trial).`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"Campbell v MGN [2004] 2 AC 457", m:`Horizontal effect: courts develop UK law between private parties in the light of Article 8 (respect for private life).`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"R (Alconbury) v Secretary of State [2003] 2 AC 295", m:`Lord Slynn: UK courts should follow any "clear and constant jurisprudence" of the ECtHR in the absence of special circumstances.`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"R v Horncastle [2010] 2 WLR 47", m:`The Supreme Court refused to follow Strasbourg (Al-Khawaja) on hearsay/Article 6, as Strasbourg had not fully considered UK domestic safeguards.`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"Macarthys Ltd v Smith (No 2) [1981] 1 QB 180", m:`Lord Denning: Community (EU) law is "part of our law which overrides any other part which is inconsistent with it" — pre-Brexit supremacy.`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"R (Miller) v Secretary of State for Exiting the EU [2017] UKSC 5", m:`The Government could NOT trigger Article 50 without Parliament's approval.`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"R (Miller) v The Prime Minister [2019] UKSC 41", m:`The prorogation of Parliament (September 2019) was unlawful.`},

/* --- Custom & soft law --- */
{t:"concept", th:"Sources · Custom & soft law", r:"Custom", m:`A local usage that "has obtained the force of law". It plays a very small part in modern common law and must meet strict criteria (time immemorial, certain, local, continuous, peaceable, not contrary to statute).`},
{t:"concept", th:"Sources · Custom & soft law", r:"Time immemorial", m:`A condition for a legally enforceable custom: it must have existed "since time immemorial".`},
{t:"concept", th:"Sources · Custom & soft law", r:"Soft law", m:`Documents that are NOT legally binding but are intended to have effect or influence (guidelines, recommendations, codes) — as opposed to "hard law".`},
{t:"stat", th:"Sources · Custom & soft law", r:"UK Corporate Governance Code", m:`An example of soft law: influential but not legally binding.`},
{t:"case", th:"Sources · Custom & soft law", r:"The Tanistry Case (1608)", m:`Recognised that a long-standing usage (the Irish custom of Tanistry) could obtain "the force of law" (though primogeniture prevailed here).`},
{t:"case", th:"Sources · Custom & soft law", r:"Egerton v Harding [1975] QB 62", m:`Upheld a customary duty to fence one's land against cattle straying from the common, enjoyed "from time immemorial".`},

/* --- Equity --- */
{t:"concept", th:"Sources · Equity", r:"Equity", m:`A body of law developed by the Chancellor/Court of Chancery to remedy the rigidity and injustice of the common law, partly inspired by moral principles. In case of conflict, equity prevails.`},
{t:"concept", th:"Sources · Equity", r:"Equitable maxims", m:`Principles guiding equity, e.g. "He who comes to equity must come with clean hands"; "Delay defeats equity"; "Equity is equality".`},
{t:"concept", th:"Sources · Equity", r:"Injunction", m:`An equitable remedy ordering a party to do, or to refrain from doing, something — developed where common-law damages were inadequate.`},
{t:"concept", th:"Sources · Equity", r:"Specific performance", m:`An equitable remedy that compels a party to fulfil a previous agreement.`},
{t:"concept", th:"Sources · Equity", r:"\"Clean hands\" maxim", m:`A claimant who has acted wrongly will not be granted an equitable remedy (D&C Builders v Rees).`},
{t:"inst", th:"Sources · Equity", r:"Court of Chancery", m:`The historic court that administered equity, presided over by the Chancellor (the "keeper of the King's conscience"); merged into the High Court by the Judicature Acts.`},
{t:"stat", th:"Sources · Equity", r:"Judicature Acts 1873–1875", m:`Merged the administration of common law and equity into one court system (the High Court), so the same court can grant both legal and equitable remedies.`},
{t:"case", th:"Sources · Equity", r:"The Earl of Oxford's Case (1615)", m:`Where the rules of common law and equity conflict, the rules of equity prevail.`},
{t:"case", th:"Sources · Equity", r:"D&C Builders v Rees [1966] 2 QB 617", m:`Illustrates the "clean hands" maxim: equitable relief refused to a party who has not acted fairly.`},

/* ============ THE COURTS ============ */
/* --- Structure & classification --- */
{t:"concept", th:"Courts · Structure & classification", r:"Hierarchy of courts", m:`Top to bottom: Supreme Court → Court of Appeal (Criminal/Civil) → High Court (KB, Chancery, Family) → Crown Court / County Court → Magistrates' Court. It underpins the rule of precedent.`},
{t:"concept", th:"Courts · Structure & classification", r:"Superior courts", m:`Courts of unlimited jurisdiction (geographic and monetary): Supreme Court, Court of Appeal, High Court, Crown Court.`},
{t:"concept", th:"Courts · Structure & classification", r:"Inferior courts", m:`Courts of limited jurisdiction, supervised by a superior court (e.g. County Court, Magistrates' Court).`},
{t:"concept", th:"Courts · Structure & classification", r:"First instance vs appellate court", m:`A first-instance (original) court hears a case for the first time; an appellate court hears appeals from lower courts.`},
{t:"concept", th:"Courts · Structure & classification", r:"Criminal law", m:`Concerns crimes and the punishment of individuals; the state prosecutes (R/Rex/Regina) the defendant. Burden of proof on the prosecution; standard "beyond reasonable doubt"; outcome guilty/not guilty.`},
{t:"concept", th:"Courts · Structure & classification", r:"Civil law (private law)", m:`Disputes between individuals/organisations (claimant v defendant). Burden of proof on the claimant; standard "balance of probabilities"; outcome liable/not liable; remedies = damages or injunctions.`},
{t:"concept", th:"Courts · Structure & classification", r:"Adversarial system", m:`The English model in which the parties drive the case before a neutral judge (contrast: the French inquisitorial system with a juge d'instruction).`},
{t:"concept", th:"Courts · Structure & classification", r:"\"Beyond reasonable doubt\"", m:`The high standard of proof in criminal cases (on the prosecution).`},
{t:"concept", th:"Courts · Structure & classification", r:"\"Balance of probabilities\"", m:`The civil standard of proof: more likely true than not (on the claimant).`},

/* --- Criminal justice --- */
{t:"concept", th:"Courts · Criminal justice", r:"Summary offence", m:`A minor offence (~97%) tried in the Magistrates' Court; the defendant is ordered to attend by a "summons". Punishment up to 6 months' prison, fines, community orders.`},
{t:"concept", th:"Courts · Criminal justice", r:"Indictable offence", m:`A serious offence tried in the Crown Court on indictment, where the jury decides; punishment up to life imprisonment (e.g. murder, robbery, rape).`},
{t:"concept", th:"Courts · Criminal justice", r:"Either-way offence", m:`An offence triable in either the Magistrates' or the Crown Court; the accused may veto trial by the magistrates (e.g. ABH, burglary).`},
{t:"concept", th:"Courts · Criminal justice", r:"Indictment", m:`A formal document setting out the offences (counts) charged against the accused in the Crown Court.`},
{t:"concept", th:"Courts · Criminal justice", r:"Summons", m:`A written order (usually delivered by post) requiring a defendant to attend court — the basis of "summary" procedure.`},
{t:"concept", th:"Courts · Criminal justice", r:"Evidential test", m:`(Code for Crown Prosecutors) Is there enough evidence to provide a "realistic prospect of conviction"?`},
{t:"concept", th:"Courts · Criminal justice", r:"Public interest test", m:`(Code for Crown Prosecutors) Even with sufficient evidence, is it in the public interest to prosecute?`},
{t:"concept", th:"Courts · Criminal justice", r:"Leading question", m:`A question that suggests its own answer; as a general rule advocates may not ask their own witnesses leading questions.`},
{t:"concept", th:"Courts · Criminal justice", r:"Oath / affirmation", m:`Ways a witness undertakes to tell the truth: a religious oath ("I swear by…") or a secular affirmation ("I do solemnly… declare and affirm…").`},
{t:"inst", th:"Courts · Criminal justice", r:"Magistrates' Court", m:`The lower criminal court (150 in E&W); tries summary offences; bench of three lay magistrates (JPs) or a district judge; a tribunal of both law and fact; over 90% of cases are completed here.`},
{t:"inst", th:"Courts · Criminal justice", r:"Crown Court", m:`The senior criminal trial court (70 in E&W); tries indictable and some either-way offences, with a judge (law) and a jury (facts); also hears appeals from the magistrates.`},
{t:"inst", th:"Courts · Criminal justice", r:"Crown Prosecution Service (CPS)", m:`The body that brings most public prosecutions; created by the Prosecution of Offences Act 1985; headed by the Director of Public Prosecutions (DPP). Applies the Code for Crown Prosecutors.`},
{t:"inst", th:"Courts · Criminal justice", r:"Director of Public Prosecutions (DPP)", m:`The head of the CPS, with the power to institute criminal proceedings (local Crown Prosecutors act on the DPP's behalf).`},
{t:"inst", th:"Courts · Criminal justice", r:"Magistrates (Justices of the Peace)", m:`Local people who volunteer, with no formal legal qualifications, sitting (usually three) to try summary cases; a chairman plus two "wingers".`},
{t:"stat", th:"Courts · Criminal justice", r:"Prosecution of Offences Act 1985", m:`Created the Crown Prosecution Service (CPS) and the office of the DPP.`},
{t:"stat", th:"Courts · Criminal justice", r:"s.44 Criminal Justice Act 2003", m:`Allows a criminal trial by judge alone where there is a real and present danger of jury tampering despite alternative arrangements.`},
{t:"case", th:"Courts · Criminal justice", r:"Woolmington v DPP [1935] AC 462", m:`The "one golden thread": it is for the prosecution to prove the defendant's guilt (the presumption of innocence).`},
{t:"case", th:"Courts · Criminal justice", r:"R v Twomey [2009] EWCA Crim 1035", m:`First approval of a trial by judge alone, where there was a real risk of jury tampering the police could not adequately minimise (Heathrow robbery).`},
{t:"case", th:"Courts · Criminal justice", r:"R v Killick [2011] EWCA Crim 1608", m:`Victims have a right to seek a review of a CPS decision NOT to prosecute (led to the Victims' Right to Review Scheme).`},

/* --- Civil justice --- */
{t:"concept", th:"Courts · Civil justice", r:"Claimant / defendant", m:`In civil proceedings, the claimant brings the claim (formerly "plaintiff") and the defendant is the person against whom it is made. There may be more than one of each.`},
{t:"concept", th:"Courts · Civil justice", r:"Civil Procedure Rules (CPR)", m:`The unified rules governing ALL civil proceedings, in force 26 April 1999, following Lord Woolf's Access to Justice report (1995).`},
{t:"concept", th:"Courts · Civil justice", r:"Overriding objective", m:`The central CPR principle: dealing with cases justly and at proportionate cost.`},
{t:"concept", th:"Courts · Civil justice", r:"Active case management", m:`The CPR principle that the judiciary actively manages litigation for greater efficiency and speed ("the trial judge as trial manager").`},
{t:"concept", th:"Courts · Civil justice", r:"Proportionality (costs)", m:`Costs must be proportionate to the value, importance and complexity of the case and the parties' means (May v Wavell Group).`},
{t:"concept", th:"Courts · Civil justice", r:"Track (allocation)", m:`Civil claims are allocated to a procedural "track" by value/complexity: Small Claims, Fast, Intermediate, Multi-Track.`},
{t:"concept", th:"Courts · Civil justice", r:"Small Claims Track", m:`Simplified, informal procedure for low-value claims (under £10,000); dealt with quickly, usually without lawyers.`},
{t:"concept", th:"Courts · Civil justice", r:"Fast Track", m:`Claims of £10,000–£25,000 (County Court); the court sets a timetable and a trial date/window; trials usually last no more than one day.`},
{t:"concept", th:"Courts · Civil justice", r:"Intermediate Track", m:`A new track (2023) for claims of £25,000–£100,000 (County Court); up to 2 experts per party.`},
{t:"concept", th:"Courts · Civil justice", r:"Multi-Track", m:`More complex cases and/or claims above £100,000 (High Court), with tailored case management (e.g. a case management conference).`},
{t:"concept", th:"Courts · Civil justice", r:"Alternative Dispute Resolution (ADR)", m:`Resolving disputes outside court (e.g. mediation); the CPR requires it to be actively considered.`},
{t:"concept", th:"Courts · Civil justice", r:"Writ vs claim form", m:`A "writ" was the old document commencing High Court proceedings; under the CPR proceedings now start with a "claim form" issued by the court.`},
{t:"inst", th:"Courts · Civil justice", r:"County Court", m:`An inferior civil court of limited (statutory) jurisdiction (County Courts Act 1984): contract, tort, personal injury and land disputes; concurrent jurisdiction with the High Court.`},
{t:"inst", th:"Courts · Civil justice", r:"High Court of Justice", m:`The senior civil court of unlimited jurisdiction (also hears appeals); three divisions — King's Bench, Chancery and Family; mostly at the Royal Courts of Justice.`},
{t:"stat", th:"Courts · Civil justice", r:"s.69 Senior Courts Act 1981", m:`Lists the civil cases that may be tried by jury in the High Court (fraud, malicious prosecution, false imprisonment; defamation removed in 2013).`},
{t:"case", th:"Courts · Civil justice", r:"Mitchell v News Group Newspapers [2013] EWCA Civ 1537", m:`"Plebgate": failure to comply with the CPR (a late costs budget) meant Mitchell could not recover his costs of winning — strict application of the rules.`},
{t:"case", th:"Courts · Civil justice", r:"Denton v TH White Ltd [2014] EWCA Civ 906", m:`Revisited Mitchell: the seriousness of the breach is taken into account when deciding whether to relieve a party from a sanction.`},
{t:"case", th:"Courts · Civil justice", r:"May v Wavell Group [2018] EWHC 23", m:`Costs must be proportionate to the value of the case (only ~£75,000 of ~£200,000 claimed costs allowed).`},

/* --- Appeals --- */
{t:"concept", th:"Courts · Appeals", r:"Routes of appeal", m:`The avenues for challenging a decision before a superior court; the appeal system is hierarchical (an appeal decision may itself be appealed).`},
{t:"concept", th:"Courts · Appeals", r:"Appeal by way of case stated", m:`A rare appeal from the Magistrates' Court to the High Court (KBD) on a point of law (s.111 Magistrates' Courts Act 1980); not a rehearing, decided on legal argument only.`},
{t:"concept", th:"Courts · Appeals", r:"Leave / permission to appeal", m:`Permission required for many appeals; granted only where there is a real prospect of success or some other compelling reason.`},
{t:"concept", th:"Courts · Appeals", r:"\"Unsafe\" conviction", m:`The ground on which the Court of Appeal allows an appeal against conviction — e.g. an error or procedural irregularity at trial (R v Clarke).`},
{t:"concept", th:"Courts · Appeals", r:"Fresh evidence", m:`Evidence not available at the original trial, which the Court of Appeal may receive where it is in the interests of justice (R v Young).`},
{t:"concept", th:"Courts · Appeals", r:"Point of law of general public importance", m:`The condition (certified by the Court of Appeal) for an appeal to reach the UK Supreme Court.`},
{t:"concept", th:"Courts · Appeals", r:"Leapfrog appeal", m:`An appeal that skips a level (e.g. High Court → Supreme Court) where a point of law of general public importance is certified.`},
{t:"concept", th:"Courts · Appeals", r:"Double jeopardy / retrial", m:`Under the Criminal Justice Act 2003, an acquittal may be retried for serious offences where compelling new evidence emerges (e.g. William Dunlop).`},
{t:"inst", th:"Courts · Appeals", r:"Court of Appeal", m:`Hears appeals from the Crown Court (Criminal Division) and the High Court (Civil Division); it reviews rather than re-hears, and is bound by the Supreme Court.`},
{t:"inst", th:"Courts · Appeals", r:"Criminal Cases Review Commission (CCRC)", m:`An independent body (1997) that investigates possible miscarriages of justice and may refer a conviction/sentence back to the Court of Appeal where there is a "real possibility" it would not be upheld.`},
{t:"case", th:"Courts · Appeals", r:"R v Cooper [1969] 1 QB 267", m:`"Lurking doubt": the Court of Appeal may exceptionally quash a conviction it feels uneasy about, even without a procedural irregularity.`},
{t:"case", th:"Courts · Appeals", r:"R v Durham Quarter Sessions, ex p Virgo [1952] 2 QB 1", m:`A guilty plea generally bars an appeal against conviction (exceptions: an equivocal plea, or a plea made under duress).`},
{t:"concept", th:"Courts · Appeals", r:"The Birmingham Six / Guildford Four", m:`Notorious miscarriages of justice (wrongful convictions for 1970s IRA bombings, based on false confessions) that fuelled reform and the creation of the CCRC.`},
{t:"stat", th:"Courts · Appeals", r:"s.40 Constitutional Reform Act 2005", m:`Governs appeals from the Court of Appeal (Civil Division) to the UK Supreme Court (leave required).`},

/* ============ PEOPLE IN COURTS ============ */
/* --- The jury --- */
{t:"inst", th:"People · The jury", r:"The jury", m:`A panel of 12 citizens, randomly selected to be representative, that determines issues of fact and returns a verdict; the "bulwark of the liberties" of the individual against the State.`},
{t:"concept", th:"People · The jury", r:"Jury equity", m:`The jury's power to acquit a defendant according to conscience, regardless of the law or the weight of the evidence (juries are not told of it, but are allowed to do it).`},
{t:"concept", th:"People · The jury", r:"Majority verdict", m:`A verdict that need not be unanimous: valid where at least 10 of the 12 jurors agree (s.17 Juries Act 1974). It prevents one extreme juror holding out.`},
{t:"concept", th:"People · The jury", r:"Jury vetting", m:`Controversial checking of potential jurors (criminal records; "extremist" views in national-security cases) under the Attorney General's guidelines.`},
{t:"concept", th:"People · The jury", r:"Challenge for cause", m:`The right of prosecution/defence to object to a juror on a "foundation of fact" (disqualification, ineligibility or assumed bias); very rare (R v Chandler).`},
{t:"concept", th:"People · The jury", r:"Jury tampering", m:`Threatening, intimidating, bribing or manipulating jurors; it may justify a trial by judge alone (s.44 Criminal Justice Act 2003).`},
{t:"inst", th:"People · The jury", r:"Jury Central Summoning Bureau (JCSB)", m:`The body that summons jurors from the electoral register and may, on "good reason", excuse or defer service.`},
{t:"stat", th:"People · The jury", r:"Juries Act 1974", m:`Governs juries: s.1 eligibility (registered elector, aged 18–75, resident); s.17 majority verdicts; s.20 makes "research" into a case an offence; s.15A allows ordering jurors to surrender devices.`},
{t:"stat", th:"People · The jury", r:"s.8 Contempt of Court Act 1981", m:`Confidentiality of the jury room: jurors may not reveal anything said or done during deliberations.`},
{t:"case", th:"People · The jury", r:"R v Wang [2005] UKHL 9", m:`The judge may NOT direct the jury to convict, however inescapable the conclusion may seem — the decision must be left to the jury (Lord Bingham).`},
{t:"case", th:"People · The jury", r:"R v McKenna [1960] 1 QB 411", m:`A cardinal principle: the jury must deliberate "in complete freedom, uninfluenced by any promise, unintimidated by any threat".`},
{t:"case", th:"People · The jury", r:"R v Ponting [1985] Crim LR 318", m:`Jury equity: the jury acquitted under the Official Secrets Act despite the judge directing there was no defence (the Belgrano / Falklands disclosure).`},
{t:"case", th:"People · The jury", r:"R v Abdroikof [2007] UKHL 37", m:`Apparent bias: convictions quashed where police/CPS jurors created a real possibility of bias — "justice must be seen to be done".`},
{t:"case", th:"People · The jury", r:"Sander v UK (2001) ECtHR", m:`The judge should have reacted robustly to allegations of racist jury remarks; by merely seeking vague assurances, he left the tribunal not objectively impartial (Article 6).`},
{t:"case", th:"People · The jury", r:"R v Mirza [2004] UKHL 2", m:`s.8 prevents investigating what took place in the jury room, but disclosing potential bias to the Court (not a third party) during the trial may be lawful.`},
{t:"case", th:"People · The jury", r:"Gregory v UK (1997) ECtHR", m:`The secrecy of jury deliberations is a crucial and legitimate feature of English trial law, guaranteeing frank deliberation (Article 6).`},
{t:"case", th:"People · The jury", r:"AG v Fraill (2011)", m:`A juror who chatted on Facebook with an acquitted defendant during deliberations was discharged and jailed (8 months) — a social-media offence.`},

/* --- The judiciary --- */
{t:"concept", th:"People · The judiciary", r:"Judicial independence", m:`A key principle: judges must be — and appear — independent ("justice must not only be done but must be seen to be done"). Safeguards: hard to remove, immunity from suit, salaries from the Consolidated Fund.`},
{t:"concept", th:"People · The judiciary", r:"Separation of powers", m:`The principle that the three branches (legislature, executive, judiciary) be distinct; reinforced by the Constitutional Reform Act 2005 (Lord Chancellor reform; creation of the Supreme Court).`},
{t:"concept", th:"People · The judiciary", r:"Recusal (disqualification for bias)", m:`A judge must stand down where bias arises — e.g. a financial interest in the outcome (Dimes) or an undeclared interest (Pinochet No 2).`},
{t:"concept", th:"People · The judiciary", r:"Puisne judge", m:`A High Court judge ("Mr/Mrs Justice Smith", written Smith J), addressed in court as "My Lord/My Lady".`},
{t:"inst", th:"People · The judiciary", r:"Supreme Court (UK)", m:`The highest appeal court for civil and criminal matters; replaced the House of Lords in 2009; 12 Justices (President: Robert Reed).`},
{t:"inst", th:"People · The judiciary", r:"Lord/Lady Chief Justice", m:`The judge at the top of the hierarchy: President of the Courts and Head of the Judiciary of England & Wales; President of the CA Criminal Division (Dame Sue Carr since 2023).`},
{t:"inst", th:"People · The judiciary", r:"Master of the Rolls", m:`President of the Court of Appeal (Civil Division), in charge of organising the court's civil work (Sir Geoffrey Vos).`},
{t:"inst", th:"People · The judiciary", r:"Lord Chancellor", m:`A Government minister heading the Ministry of Justice; historically straddled all three branches, but the Constitutional Reform Act 2005 removed the roles of Speaker of the Lords, Head of the Judiciary and judge.`},
{t:"inst", th:"People · The judiciary", r:"Judicial Appointments Commission (JAC)", m:`Independent body (operating since 2006) that selects judges on merit and good character, to make appointments transparent and increase diversity (15 members + lay commissioners).`},
{t:"inst", th:"People · The judiciary", r:"Lady Brenda Hale", m:`First female Law Lord (2004) and President of the UK Supreme Court (2017–2020); a symbol of judicial diversity.`},
{t:"stat", th:"People · The judiciary", r:"Constitutional Reform Act 2005", m:`Reformed the office of Lord Chancellor and created the UK Supreme Court, strengthening the separation of powers and judicial independence.`},
{t:"case", th:"People · The judiciary", r:"Dimes v Grand Junction Canal (1852)", m:`A judge with a financial interest in the outcome is automatically disqualified for bias.`},
{t:"case", th:"People · The judiciary", r:"R v Bow Street Magistrate, ex p Pinochet (No 2) [2000] 1 AC 119", m:`Lord Hoffmann's undeclared link to Amnesty International gave an impression of bias, so the case had to be reheard.`},
{t:"case", th:"People · The judiciary", r:"A v Secretary of State for the Home Department [2004] UKHL 56", m:`Detention of foreign terror suspects without trial was challenged under the Human Rights Act — judges checking the exercise of state power.`},

/* --- Lawyers (solicitors & barristers) --- */
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"Solicitor", m:`A lawyer who advises clients and handles "paperwork" (conveyancing, drafting), with rights of audience mainly in the lower courts; may become a solicitor-advocate. Often works in a "high-street firm" or a commercial firm.`},
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"Barrister", m:`A specialist lawyer and advocate, mainly before the higher courts; usually self-employed in "chambers"; must be "called to the Bar" by an Inn of Court.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Right of audience", m:`The right to appear and present a case in a particular court; solicitors have it mainly in the lower courts, barristers in the higher courts.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Cab-rank rule", m:`A barrister must accept any case in their area of expertise (if available and a reasonable fee is offered), so even the most unpopular defendant can be represented.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Conveyancing", m:`The legal work of transferring ownership of property — classic, day-to-day solicitors' work.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Chambers (set of chambers)", m:`The shared offices in which self-employed barristers work together, sharing the cost of clerks, secretaries and rooms.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Pupillage", m:`The practical training stage to become a barrister: roughly 6 months observing a supervisor, then 6 months conducting one's own cases.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"King's Counsel (KC)", m:`A senior barrister ("silk") who may apply after ~15 years on merit; takes higher-paid cases with less paperwork. Others are "juniors". (Queen's Counsel before Sept 2022.)`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Solicitors Qualifying Examination (SQE)", m:`Since 2021, the route to qualify as a solicitor: pass SQE1 and SQE2 plus two years' Qualifying Work Experience, and meet the SRA's character requirements.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Magic Circle", m:`The leading London commercial law firms (e.g. Linklaters, Clifford Chance, Slaughter & May, Freshfields, Allen & Overy).`},
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"Inns of Court", m:`Four ancient London institutions (Gray's Inn, Lincoln's Inn, Middle Temple, Inner Temple) that "call" people to the Bar; the professional associations for barristers.`},
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"The Clerk (of chambers)", m:`Manages and allocates barristers' work, negotiates fees, and is the link between barristers and solicitors.`},
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"Bar Standards Board", m:`The regulator of barristers (e.g. it oversees the 2004 Public Access Rule allowing the public to instruct a barrister directly).`}

];

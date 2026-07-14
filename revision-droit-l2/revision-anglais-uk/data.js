/* =====================================================================
   Revision data — Legal English: The UK Legal System
   Course by Florence Thépot (L2).

   PRUNED VERSION — refocused on what actually comes up in the EXAM
   ANSWERS (corrigé rédigé: 5 subjects, English-law questions Q5–Q7).
   Cards that never appear in the corrigés were removed; the high-yield
   references + transversal concepts were kept and a few were added.
   The full original deck is preserved in "data.original.js".

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
  "Sources · Equity",
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
{t:"concept", th:"Sources · Case law & precedent", r:"Stare decisis", m:`"Let the decision stand": the doctrine of binding precedent. It operates vertically (higher courts bind lower ones) and horizontally (a court tends to bind itself).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Rule of precedent", m:`Courts must follow the legal principles laid down in previous decisions of higher courts; it depends on a hierarchy of courts and promotes certainty, consistency and equality before the law.`},
{t:"concept", th:"Sources · Case law & precedent", r:"Precedent: merits & weaknesses", m:`Merits: certainty, consistency and equal treatment. Weaknesses: rigidity — a court may be bound by a decision now seen as wrong, so bad law is corrected slowly and only by chance on appeal; and legitimacy — through precedent, unelected judges appear to make law, and retrospectively (a concern the declaratory theory tries to answer).`},
{t:"concept", th:"Sources · Case law & precedent", r:"Declaratory theory", m:`The theory that judges do not make law but merely declare what the law has always been (Blackstone). Used to answer the legitimacy critique of judge-made law; criticised by Lord Reid as "a fairy tale".`},
{t:"concept", th:"Sources · Case law & precedent", r:"Retrospective effect (of precedent)", m:`Because judges are said only to declare the law, a new precedent applies to past situations as well as future ones — there is no prospective overruling in England (illustrated by R v R).`},
{t:"case", th:"Sources · Case law & precedent", r:"London Street Tramways v LCC [1898] AC 375", m:`The House of Lords was absolutely bound by its own previous decisions; only an Act of Parliament could change a settled point (the rule before 1966).`},
{t:"case", th:"Sources · Case law & precedent", r:"Practice Statement [1966] 3 All ER 77", m:`The House of Lords (now the UK Supreme Court since the CRA 2005) may depart from its own previous decisions "when it appears right to do so" — precedent normally binds, but too rigid an adherence may cause injustice. Used sparingly, especially in criminal law and where people have relied on the law.`},
{t:"case", th:"Sources · Case law & precedent", r:"R v Jogee [2016] UKSC 8", m:`A leading use of the power to depart: the Supreme Court corrected the law on joint enterprise / secondary liability — the mental element is "intention to assist or encourage", not mere foresight.`},
{t:"case", th:"Sources · Case law & precedent", r:"Young v Bristol Aeroplane Co [1944] KB 718", m:`The Court of Appeal is bound by its own decisions, save three exceptions: conflicting CA decisions; conflict with the Supreme Court/HL; or a decision made per incuriam.`},
{t:"case", th:"Sources · Case law & precedent", r:"Donoghue v Stevenson [1932] AC 567", m:`A snail in a ginger beer bottle: despite no contract, the consumer could sue the manufacturer (Lord Atkin's "neighbour principle"). Often cited for the declaratory theory of judicial law-making.`},

/* --- Legislation & interpretation --- */
{t:"concept", th:"Sources · Legislation & interpretation", r:"Literal rule", m:`The judge gives the words of a statute their ordinary, plain, grammatical (dictionary) meaning, even if the result seems unfortunate — out of respect for the sovereignty of Parliament (Fisher v Bell).`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Golden rule", m:`Where a literal reading produces an absurd or unjust result, the words may be modified to avoid it (Adler v George). A corrective to the literal rule.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Invitation to treat", m:`In contract law, a display of goods (e.g. in a shop window) is an invitation to treat — an invitation to make an offer — not an offer itself. Central to Fisher v Bell.`},
{t:"concept", th:"Sources · Legislation & interpretation", r:"Parliamentary sovereignty", m:`Parliament is the supreme law-making body: it may make or unmake any law, and no court may override an Act (British Railways Board v Pickin). It underpins the literal rule, the HRA "declaration of incompatibility" (courts cannot strike down statute) and the subordinate role of the House of Lords.`},
{t:"case", th:"Sources · Legislation & interpretation", r:"Fisher v Bell [1961] 1 QB 394", m:`Literal rule: displaying a flick knife in a shop window was only an "invitation to treat", not "offering for sale" under the Restriction of Offensive Weapons Act 1959 — so the shopkeeper was not guilty.`},
{t:"case", th:"Sources · Legislation & interpretation", r:"Whiteley v Chappell (1868)", m:`Literal rule producing absurdity: a man who voted in the name of a dead person was acquitted, because a dead person is not literally a person "entitled to vote".`},
{t:"case", th:"Sources · Legislation & interpretation", r:"Adler v George [1964] 2 QB 7", m:`Golden rule: "in the vicinity of" a prohibited place was read to include being inside it, to avoid the absurd result of an obstruction committed within the place escaping liability (Official Secrets Act 1920).`},
{t:"inst", th:"Sources · Legislation & interpretation", r:"UK Parliament", m:`The legislature, composed of the House of Commons, the House of Lords and the Crown. Three functions: to legislate, to deal with public finance, and to scrutinise the government.`},
{t:"inst", th:"Sources · Legislation & interpretation", r:"House of Commons", m:`The elected chamber (650 MPs, each for a constituency). Its democratic legitimacy is the basis for its supremacy over the unelected House of Lords.`},
{t:"inst", th:"Sources · Legislation & interpretation", r:"House of Lords", m:`The unelected second chamber. In law-making it acts mainly as a revising chamber — it scrutinises, debates and amends public and private bills — but cannot ultimately block legislation. Composed of life peers, 92 remaining hereditary peers and bishops (Lords Spiritual). Until 2009 it also housed the highest court.`},
{t:"stat", th:"Sources · Legislation & interpretation", r:"Parliament Acts 1911 and 1949", m:`Limit the power of the unelected House of Lords over most public bills to one of delay: a bill may receive Royal Assent without the Lords' consent after a certain period (e.g. the Hunting Act 2004).`},
{t:"stat", th:"Sources · Legislation & interpretation", r:"Hunting Act 2004", m:`Bans hunting wild mammals with dogs; passed via the Parliament Acts despite the Lords' opposition — a leading example of the House of Lords being overridden.`},
{t:"stat", th:"Sources · Legislation & interpretation", r:"House of Lords Act 1999", m:`Removed most hereditary peers from the House of Lords (retaining 92 on a transitional basis), in response to the criticism that the chamber lacks democratic legitimacy; it nonetheless remains wholly unelected.`},

/* --- International sources (ECHR & EU) --- */
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Brexit", m:`The UK's withdrawal from the EU (referendum June 2016). The UK ceased to be a Member State on 31 January 2020; the transition period ended on 31 December 2020.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Supremacy of EU law (pre-Brexit)", m:`Before Brexit, EU law took precedence over conflicting UK domestic law (Lord Denning, Macarthys v Smith). The general supremacy of EU law was abolished, from 31 December 2023, by the Retained EU Law (Revocation and Reform) Act 2023.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Retained / assimilated EU law", m:`The body of EU law converted into domestic law by the EU (Withdrawal) Act 2018 to avoid a legal vacuum — EU-derived legislation (s.2), direct EU legislation (s.3) and directly effective rights (s.4). Renamed "assimilated law" by the 2023 Act, with its supremacy and special status removed.`},
{t:"concept", th:"Sources · International (ECHR & EU)", r:"Declaration of incompatibility (HRA s.4)", m:`Where primary legislation cannot be read compatibly with Convention rights, certain higher courts may declare it incompatible. This does NOT invalidate or disapply the Act — it stays in force; the declaration merely signals the issue to Parliament (s.4(6)), preserving parliamentary sovereignty.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"European Convention on Human Rights (ECHR)", m:`An international treaty protecting fundamental rights, adopted under the Council of Europe (1950) and signed by the UK; brought into UK domestic law by the Human Rights Act 1998.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"Human Rights Act 1998 (HRA)", m:`Gives further effect to the ECHR in UK law (in force 2000). Key sections: s.2 (take account of Strasbourg case law), s.3 (interpret legislation compatibly "so far as it is possible"), s.4 (declaration of incompatibility), s.10 (fast-track remedial order). Courts cannot strike down primary legislation.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"European Communities Act 1972", m:`The statute through which EU law took effect in the UK; repealed by the EU (Withdrawal) Act 2018 so that EU law ceased to apply of its own force at the end of the implementation period.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"EU (Withdrawal) Act 2018", m:`Cornerstone of the UK's domestic withdrawal: repealed the European Communities Act 1972 and converted existing EU law into "retained EU law" (with a limited supremacy over pre-exit law, s.5), to avoid a legislative vacuum.`},
{t:"stat", th:"Sources · International (ECHR & EU)", r:"Retained EU Law (Revocation and Reform) Act 2023", m:`From 31 December 2023, renamed retained EU law "assimilated law", abolished the supremacy of EU law and the general status of retained law, and let courts more readily depart from retained EU case law — a shift from continuity to divergence.`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"Ghaidan v Godin-Mendoza [2004] UKHL 30", m:`HRA s.3 in action: the word "spouse" in the Rent Act 1977 was read to include a same-sex partner, to make the statute compatible with the Convention (non-discrimination).`},
{t:"case", th:"Sources · International (ECHR & EU)", r:"R v A [2002] 1 AC 45", m:`HRA s.3 strong interpretive obligation: the "rape shield" provision (s.41 Youth Justice and Criminal Evidence Act 1999) was read down to preserve the right to a fair trial (Article 6).`},
{t:"inst", th:"Sources · International (ECHR & EU)", r:"European Court of Human Rights (ECtHR)", m:`The Strasbourg court interpreting the ECHR. UK courts are "not bound" by it but "must take account of" its judgments (HRA s.2).`},

/* --- Equity --- */
{t:"concept", th:"Sources · Equity", r:"Equity", m:`The body of rules developed in the Court of Chancery by the Lord Chancellor ("keeper of the King's conscience") to mitigate the rigidity and gaps of the common law. It acts in personam and, in case of conflict, prevails over the common law.`},
{t:"concept", th:"Sources · Equity", r:"Equitable maxims", m:`Principles guiding the discretionary grant of equitable relief, e.g. "He who comes to equity must come with clean hands"; "Delay defeats equity"; "Equity is equality".`},
{t:"concept", th:"Sources · Equity", r:"Injunction", m:`A discretionary equitable remedy ordering a party to do, or to refrain from doing, something — granted where common-law damages would be inadequate.`},
{t:"concept", th:"Sources · Equity", r:"Specific performance", m:`A discretionary equitable remedy that compels a party to perform a contract (e.g. the sale of a unique asset such as land), where damages would be inadequate.`},
{t:"concept", th:"Sources · Equity", r:"\"Clean hands\" maxim", m:`A claimant who has acted unfairly or wrongly will be refused an equitable remedy (D&C Builders v Rees).`},
{t:"concept", th:"Sources · Equity", r:"Trust", m:`Equity's most important original creation, unknown to the common law: a trustee holds property for the benefit of another (the beneficiary). Beyond new remedies, equity thus created entirely new rights.`},
{t:"inst", th:"Sources · Equity", r:"Court of Chancery", m:`The historic court that administered equity, presided over by the Lord Chancellor; its separate administration was merged into the High Court by the Judicature Acts.`},
{t:"stat", th:"Sources · Equity", r:"Judicature Acts 1873–1875", m:`Fused the administration of common law and equity into a single court structure, so the same court can grant both legal and equitable remedies (though the two bodies of rules remain conceptually distinct).`},
{t:"case", th:"Sources · Equity", r:"The Earl of Oxford's Case (1615)", m:`Where the rules of common law and equity conflict, equity prevails — a rule now preserved by s.49 of the Senior Courts Act 1981.`},
{t:"case", th:"Sources · Equity", r:"D&C Builders v Rees [1966] 2 QB 617", m:`Illustrates the "clean hands" maxim: equitable relief refused to a party who had not acted fairly.`},

/* ============ THE COURTS ============ */
/* --- Criminal justice --- */
{t:"concept", th:"Courts · Criminal justice", r:"Summary offence", m:`A minor offence tried in the Magistrates' Court (the great majority of cases); punishment is limited (short custody, fines, community orders).`},
{t:"concept", th:"Courts · Criminal justice", r:"Indictable offence", m:`One of the most serious offences (e.g. murder, rape, robbery), tried on indictment in the Crown Court, where the jury decides the verdict; punishment up to life imprisonment.`},
{t:"concept", th:"Courts · Criminal justice", r:"Either-way offence", m:`An offence triable in either the Magistrates' or the Crown Court (e.g. theft, ABH); the accused may elect Crown Court trial.`},
{t:"concept", th:"Courts · Criminal justice", r:"Indictment", m:`The formal document setting out the counts charged against the accused in the Crown Court — hence trial "on indictment".`},
{t:"concept", th:"Courts · Criminal justice", r:"\"Beyond reasonable doubt\"", m:`The high standard of proof in criminal cases, borne by the prosecution; the jury must be sure of guilt before convicting.`},
{t:"concept", th:"Courts · Criminal justice", r:"Full Code Test", m:`The two-stage test in the Code for Crown Prosecutors that a Crown Prosecutor applies before charging: first the evidential stage, then the public interest stage. An independent filter between police investigation and trial.`},
{t:"concept", th:"Courts · Criminal justice", r:"Evidential test", m:`First stage of the Full Code Test: is there enough evidence for a "realistic prospect of conviction" (a properly directed, impartial tribunal more likely than not to convict)? If not, the case stops, however serious.`},
{t:"concept", th:"Courts · Criminal justice", r:"Public interest test", m:`Second stage of the Full Code Test: even where the evidence is sufficient, is a prosecution required in the public interest (seriousness, culpability, impact on the victim, etc.)?`},
{t:"concept", th:"Courts · Criminal justice", r:"Verdict vs sentence", m:`Two distinct decisions in the Crown Court: the verdict (guilty or not guilty — a question of fact) is returned by the jury; the sentence (the punishment) is imposed by the judge, who also rules on the law and the admissibility of evidence.`},
{t:"inst", th:"Courts · Criminal justice", r:"Crown Court", m:`The senior criminal trial court; tries indictable (and some either-way) offences with a judge (law, sentence) and a jury of twelve (facts, verdict); also hears appeals from the magistrates.`},
{t:"inst", th:"Courts · Criminal justice", r:"Crown Prosecution Service (CPS)", m:`The principal public prosecuting authority for England and Wales; created by the Prosecution of Offences Act 1985 (operational 1986) to separate the investigation of crime (police) from the decision to prosecute. Applies the Code for Crown Prosecutors.`},
{t:"inst", th:"Courts · Criminal justice", r:"Director of Public Prosecutions (DPP)", m:`Head of the CPS, acting under the superintendence of the Attorney General; local Crown Prosecutors act on the DPP's behalf.`},
{t:"stat", th:"Courts · Criminal justice", r:"Prosecution of Offences Act 1985", m:`Created the Crown Prosecution Service (CPS) and the office of the DPP, addressing the concern that the police should not be both investigator and prosecutor.`},
{t:"case", th:"Courts · Criminal justice", r:"R v Killick [2011] EWCA Crim 1608", m:`A victim may seek a review of a CPS decision NOT to prosecute — the basis of the Victims' Right to Review scheme; underlines the CPS's accountability for its charging decisions.`},

/* --- Civil justice --- */
{t:"concept", th:"Courts · Civil justice", r:"Civil Procedure Rules (CPR)", m:`The unified rules governing civil proceedings, introduced after Lord Woolf's reforms and in force from 1999. They responded to a system where cost often exceeded the value of the claim, the wealthy were favoured, and cost and delay were unpredictable.`},
{t:"concept", th:"Courts · Civil justice", r:"Overriding objective", m:`The central CPR principle (rule 1.1): to deal with cases justly and at proportionate cost — ensuring the parties are on an equal footing, saving expense, proportionality to value/complexity, expedition, and an appropriate share of the court's resources.`},
{t:"case", th:"Courts · Civil justice", r:"Mitchell v News Group Newspapers [2013] EWCA Civ 1537", m:`"Plebgate": the claimant's solicitors missed the deadline to file a costs budget; as a sanction the budget was limited to court fees, so even if he won he could recover almost nothing — and the CA refused relief. Strict enforcement of the rules.`},
{t:"case", th:"Courts · Civil justice", r:"Denton v TH White Ltd [2014] EWCA Civ 906", m:`Refined Mitchell: a three-stage test for relief from sanctions — assess the seriousness of the breach, the reason for it, and all the circumstances.`},

/* --- Appeals --- */
{t:"concept", th:"Courts · Appeals", r:"The Birmingham Six / Guildford Four", m:`Notorious 1970s miscarriages of justice (wrongful convictions for IRA bombings, based on unreliable confessions and forensic evidence; also the Maguire Seven). The Birmingham Six were convicted in 1975 and acquitted in 1991; these cases fuelled reform and the creation of the CCRC.`},
{t:"concept", th:"Courts · Appeals", r:"Runciman Commission (1993)", m:`The Royal Commission on Criminal Justice; recommended an independent body to take over the referral of suspected wrongful convictions from the Home Secretary (criticised as slow and politically sensitive) — leading to the CCRC.`},
{t:"inst", th:"Courts · Appeals", r:"Criminal Cases Review Commission (CCRC)", m:`An independent public body established by the Criminal Appeal Act 1995 (operational 1997) that reviews suspected miscarriages of justice and may refer a conviction or sentence back to the Court of Appeal where there is a "real possibility" it would not be upheld (usually on fresh evidence or argument).`},
{t:"inst", th:"Courts · Appeals", r:"Court of Appeal", m:`Hears appeals from the Crown Court (Criminal Division) and the High Court (Civil Division); it reviews rather than re-hears, is bound by the Supreme Court, and is where the CCRC refers convictions.`},
{t:"stat", th:"Courts · Appeals", r:"Criminal Appeal Act 1995", m:`Established the Criminal Cases Review Commission (CCRC), which became operational in 1997 to provide independent post-appeal review of possible miscarriages of justice.`},

/* ============ PEOPLE IN COURTS ============ */
/* --- The jury --- */
{t:"inst", th:"People · The jury", r:"The jury", m:`A panel of twelve citizens, randomly selected to be representative, that decides questions of fact and returns a verdict; famously called the "bulwark of the liberties" of the individual against the State.`},
{t:"concept", th:"People · The jury", r:"Jury equity", m:`The jury's power to acquit according to its conscience, against the evidence or the judge's direction (jury nullification / "perverse" verdict). Made possible because the jury gives a general verdict with no reasons, and an acquittal cannot be appealed by the prosecution.`},
{t:"concept", th:"People · The jury", r:"Jury eligibility / disqualification / excusal", m:`Eligibility (Juries Act 1974): aged 18–75, a registered elector, resident in the UK for at least 5 years since age 13, and not a "mentally disordered person". Distinct from disqualification (e.g. on bail or with certain sentences) and from discretionary excusal/deferral. The Criminal Justice Act 2003 abolished most ineligibility (judges, lawyers, police), widening the pool but raising impartiality concerns (Abdroikof).`},
{t:"concept", th:"People · The jury", r:"Jury vetting", m:`Controversial checking of potential jurors (criminal records; "extremist" views in national-security cases) under the Attorney General's guidelines; together with random selection and the bias rules, aimed at a representative and impartial jury.`},
{t:"stat", th:"People · The jury", r:"Juries Act 1974", m:`Governs jury service. Eligibility: registered elector, aged 18–75 (raised from 70 by the Criminal Justice and Courts Act 2015), UK-resident. Also: s.17 majority verdicts (at least 10 of 12), and offences for jurors who research a case.`},
{t:"stat", th:"People · The jury", r:"s.8 Contempt of Court Act 1981", m:`Protects the confidentiality of the jury room: it is an offence to disclose statements, opinions, arguments or votes made during deliberations — so the jury's reasoning cannot be examined.`},
{t:"case", th:"People · The jury", r:"R v Ponting [1985] Crim LR 318", m:`Classic jury equity: a civil servant prosecuted under the Official Secrets Act for leaking documents on the sinking of the Belgrano (Falklands) was acquitted, despite the judge directing that he had no defence in law.`},
{t:"case", th:"People · The jury", r:"R v Abdroikof [2007] UKHL 37", m:`Apparent bias: convictions were quashed where police/CPS jurors created a real possibility of bias — "justice must be seen to be done".`},
{t:"case", th:"People · The jury", r:"AG v Fraill (2011)", m:`A juror who researched the case online and contacted the (acquitted) defendant via Facebook during the trial was held in contempt and jailed — showing how hard jury misconduct is to detect and control.`},

/* --- The judiciary --- */
{t:"concept", th:"People · The judiciary", r:"Judicial independence", m:`Judges must decide impartially, according to law, free from pressure by the executive, legislature or parties; it has an institutional and an individual dimension, and underpins both the separation of powers and the rule of law. "Justice must not only be done, it must be seen to be done" (R v Sussex Justices).`},
{t:"concept", th:"People · The judiciary", r:"Security of tenure", m:`A central safeguard of judicial independence: since the Act of Settlement 1701, senior judges hold office "during good behaviour" and can be removed only by the monarch on an address of both Houses; their salaries are charged on the Consolidated Fund (no annual political vote). In practice no senior English judge has been so removed.`},
{t:"concept", th:"People · The judiciary", r:"Separation of powers", m:`The principle that the three branches (legislature, executive, judiciary) be kept distinct (Montesquieu); reinforced by the Constitutional Reform Act 2005 (reform of the Lord Chancellor; creation of the Supreme Court).`},
{t:"concept", th:"People · The judiciary", r:"Recusal (disqualification for bias)", m:`A judge must stand down where there is bias or its appearance — automatic disqualification for a pecuniary interest (Dimes) or a relevant non-pecuniary connection (Pinochet No 2).`},
{t:"inst", th:"People · The judiciary", r:"Supreme Court (UK)", m:`The highest appeal court for civil and criminal matters; created by the Constitutional Reform Act 2005, it replaced the Appellate Committee of the House of Lords in 2009 (12 Justices).`},
{t:"inst", th:"People · The judiciary", r:"Lord Chancellor", m:`A Government minister (Ministry of Justice). Historically straddled all three branches; the Constitutional Reform Act 2005 removed the judicial roles and imposed a statutory duty (s.3) to uphold judicial independence and not to seek to influence judicial decisions.`},
{t:"inst", th:"People · The judiciary", r:"Judicial Appointments Commission (JAC)", m:`Independent body (since 2006) that selects judges on merit and good character, making appointments transparent and promoting diversity; created by the Constitutional Reform Act 2005.`},
{t:"stat", th:"People · The judiciary", r:"Constitutional Reform Act 2005", m:`Reformed the office of Lord Chancellor, created the UK Supreme Court and the Judicial Appointments Commission, and imposed a statutory duty on ministers to uphold judicial independence (s.3) — strengthening the separation of powers.`},
{t:"stat", th:"People · The judiciary", r:"Act of Settlement 1701", m:`Basis of judges' security of tenure: senior judges hold office "during good behaviour" and may be removed only by the monarch upon an address of both Houses of Parliament.`},
{t:"case", th:"People · The judiciary", r:"Dimes v Grand Junction Canal (1852)", m:`A judge with a financial (pecuniary) interest in the outcome is automatically disqualified for bias.`},
{t:"case", th:"People · The judiciary", r:"R v Bow Street Magistrate, ex p Pinochet (No 2) [2000] 1 AC 119", m:`A non-pecuniary connection can also disqualify: Lord Hoffmann's undeclared link to Amnesty International created an appearance of bias, so the case had to be reheard.`},
{t:"case", th:"People · The judiciary", r:"R v Sussex Justices, ex parte McCarthy [1924] 1 KB 256", m:`Source of the maxim that "justice must not only be done but must manifestly and undoubtedly be seen to be done" — the appearance of impartiality matters as much as its reality.`},

/* --- Lawyers (solicitors & barristers) --- */
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"Solicitor", m:`A lawyer who carries out a broad range of work (conveyancing, wills and probate, family matters, drafting, day-to-day advice) and is usually the client's first point of contact; rights of audience mainly in the lower courts, with higher rights as a solicitor-advocate under the Courts and Legal Services Act 1990.`},
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"Barrister", m:`A specialist advocate who gives expert opinions and represents clients chiefly in the higher courts; traditionally self-employed in chambers and instructed through a solicitor, though direct public access is now allowed.`},
{t:"inst", th:"People · Lawyers (solicitors & barristers)", r:"Bar Standards Board", m:`The regulator of barristers; its Code of Conduct contains the cab-rank rule and oversees direct public access to barristers.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Cab-rank rule", m:`A self-employed barrister must accept any case within their field of practice (if available and a proper fee is offered), whatever the client or the nature of the case — so even an unpopular defendant can be represented. Secures access to representation for all.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Right of audience", m:`The right to appear and present a case in a particular court: solicitors have it mainly in the lower courts, barristers in the higher courts; solicitors may gain higher rights under the Courts and Legal Services Act 1990.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Conveyancing", m:`The legal work of transferring ownership of property — classic, day-to-day solicitors' work.`},
{t:"concept", th:"People · Lawyers (solicitors & barristers)", r:"Chambers (set of chambers)", m:`The shared offices in which self-employed barristers work together, sharing the cost of clerks and rooms.`}

];

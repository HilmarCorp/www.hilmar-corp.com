export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-black text-white grid place-items-center font-semibold">H</div>
            <span className="font-semibold tracking-tight">HilmarCorp</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#approche" className="hover:opacity-70">Approche</a>
            <a href="#recherche" className="hover:opacity-70">Recherche</a>
            <a href="#conformite" className="hover:opacity-70">Conformité</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-neutral-900 px-3 py-2 text-sm hover:bg-neutral-900 hover:text-white transition">Demander une présentation</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Gestion d’actifs <span className="whitespace-nowrap">crypto</span> pilotée par IA.
            </h1>
            <p className="mt-5 text-neutral-600 max-w-2xl">
              Recherche propriétaire. Discipline du risque. Exécution institutionnelle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-black text-white px-5 py-3 text-sm hover:opacity-90">Accès institutionnel (sous NDA)</a>
              <a href="#approche" className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm hover:border-neutral-900">Découvrir notre approche</a>
            </div>
            <div className="mt-8 text-xs text-neutral-500 leading-relaxed">
              <p className="max-w-xl">
                Avertissement : ce site ne constitue ni une offre au public, ni un conseil en investissement.
                Aucune performance n’est affichée. Accès restreint aux investisseurs qualifiés. Sous NDA.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] w-full rounded-3xl border border-neutral-200 shadow-sm grid place-items-center">
              <div className="text-center px-8">
                <p className="text-sm text-neutral-500">Tableau de bord IA — aperçu</p>
                <p className="mt-2 text-xs text-neutral-500">(visualisation non contractuelle, données masquées)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section id="approche" className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Notre approche</h2>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            Architecture IA propriétaire combinant encodeurs temporels (Transformer), experts spécialisés (Mixture-of-Experts)
            et agent de décision par renforcement (SAC). Objectif : profil rendement/risque robuste à travers les cycles.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'Recherche propriétaire',
                d: 'Backtests hors-échantillon, validations en fenêtres roulantes, stress tests. Publication de travaux quand pertinent.'
              },
              {
                t: 'Exécution & infrastructure',
                d: 'Pipelines temps réel, latence maîtrisée, journaux détaillés pour audit et conformité.'
              },
              {
                t: 'Contrôle du risque',
                d: 'Budget de risque, limites d’exposition, gestion du drawdown et des coûts de transaction.'
              }
            ].map((c, i) => (
              <div key={i} className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
                <h3 className="font-medium">{c.t}</h3>
                <p className="mt-2 text-sm text-neutral-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recherche */}
      <section id="recherche" className="">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Recherche</h2>
              <p className="mt-3 text-neutral-600 max-w-3xl">
                Notes techniques, expériences et publications sélectionnées. Accès complet réservé aux partenaires sous NDA.
              </p>
            </div>
            <a href="#contact" className="hidden sm:inline-flex rounded-xl border border-neutral-900 px-3 py-2 text-sm hover:bg-neutral-900 hover:text-white">Demander l’accès</a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              t:'Encodeur temporel pour séries financières',
              d:'Synthèse de 30 jours de features multi-sources en vecteur de contexte exploitable par l’agent RL.'
            },{
              t:'Mixture-of-Experts pour régimes de marché',
              d:'Pondération dynamique d’experts spécialisés selon le contexte latent.'
            },{
              t:'SAC récurrent & contrôle du drawdown',
              d:'Politique stochastique avec mémoire courte et pénalités de risque explicites.'
            }].map((p, i) => (
              <article key={i} className="rounded-3xl border border-neutral-200 p-6 hover:shadow-sm transition">
                <h3 className="font-medium">{p.t}</h3>
                <p className="mt-2 text-sm text-neutral-600">{p.d}</p>
                <div className="mt-4 text-sm">
                  <span className="rounded-lg border px-2 py-1">Note technique</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conformité */}
      <section id="conformite" className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Conformité & risques</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700 max-w-3xl list-disc list-inside">
            <li>Pas d’offre au public. Accès réservé aux investisseurs qualifiés et partenaires sous NDA.</li>
            <li>HilmarCorp n’est pas une SGP agréée à ce jour. Aucune collecte de fonds. Aucun conseil personnalisé.</li>
            <li>Les performances passées ne préjugent pas des performances futures. Les actifs crypto présentent un risque élevé de perte en capital.</li>
            <li>RGPD : données minimales collectées (formulaire de contact). Voir notre politique de confidentialité.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Contact institutionnel</h2>
              <p className="mt-3 text-neutral-600 max-w-xl">Explorons un partenariat sous NDA (incubateur, data providers, exchanges, institutions).</p>

              <div className="mt-6 space-y-3 text-sm">
                <p><span className="font-medium">E‑mail :</span> contact@hilmarcorp.com</p>
                <p><span className="font-medium">Localisation :</span> Paris & Lisbonne</p>
              </div>

              <div className="mt-8 text-xs text-neutral-500">
                <p>En soumettant une demande, vous acceptez de ne pas solliciter d’informations confidentielles sans NDA signé.</p>
              </div>
            </div>
            <form className="rounded-3xl border border-neutral-200 p-6 bg-white shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-sm">Nom<input type="text" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Votre nom"/></label>
                <label className="text-sm">Société<input type="text" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 y-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Organisation"/></label>
              </div>
              <label className="block mt-4 text-sm">E‑mail professionnel<input type="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="prenom.nom@entreprise.com"/></label>
              <label className="block mt-4 text-sm">Message<textarea className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Objet de la demande"/></textarea></label>
              <button type="button" className="mt-5 w-full rounded-2xl bg-black text-white px-5 py-3 text-sm hover:opacity-90">Envoyer la demande</button>
            </form>
          </div>
        </div>
   
  </section>
    {/* Insights */}
      
      <section id="insights" className="border-t border-neutral-50/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tight">Insights</h2>
          <p className="mt-3 text-neutral-600 max-w-3xl">
            Nos dernières actualités et analyses sur l'IA et les marchés financiers.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <article className="border border-neutral-200 p-6 rounded-lg hover:shadow-sm transition">
              <h3 className="font-medium">Subvention Bpifrance</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Nous avons déposé un dossier auprès de Bpifrance pour financer l'entraînement de notre IA. Découvrez nos objectifs et l'impact attendu.
              </p>
              <a href="/bpi.html" className="mt-4 inline-block font-semibold text-sm hover:underline text-blue-600">
                Lire la suite →
              </a>
            </article>
          </div>
        </div>
      </section>
   </section>

  
  {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row gap-6 items-center justify-between text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} HilmarCorp. Tous droits réservés.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:opacity-70">Mentions légales</a>
            <a href="#" className="hover:opacity-70">Avertissement risques</a>
            <a href="#" className="hover:opacity-70">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


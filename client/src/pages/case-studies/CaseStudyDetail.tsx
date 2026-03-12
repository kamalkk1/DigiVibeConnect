
import { useRoute, Link } from "wouter";
import { ArrowLeft, CheckCircle2, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/siteData";
import PageLayout from "@/components/layout/PageLayout";
import NotFound from "@/pages/not-found";

export default function CaseStudyDetail() {
  const [, params] = useRoute("/case-studies/:slug");
  const slug = params?.slug;

  const study = caseStudies.find(cs => cs.id === slug);

  if (!study) {
    return <NotFound />;
  }

  // Find related case studies (same industry or random)
  const relatedStudies = caseStudies
    .filter(cs => cs.id !== study.id && cs.industry === study.industry)
    .slice(0, 2);

  return (
    <PageLayout
      title={`${study.title} | DigiVibe Case Study`}
      description={`See how DigiVibe helped ${study.client} achieve ${study.results[0].value} ${study.results[0].metric}.`}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#08080f] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#08080f] to-indigo-900/20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/case-studies">
            <span className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </span>
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
                  {study.industry}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> 2024
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                {study.title}
              </h1>
              
              <div className="text-xl text-slate-300 mb-8 max-w-2xl">
                {study.client} needed to {study.challenge.toLowerCase().replace('.', '')}. 
                Here's how we solved it.
              </div>

              <div className="flex flex-wrap gap-2">
                {study.services.map((service, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Results Card (Hero) */}
            <div className="w-full lg:w-1/3 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Key Results
              </h3>
              <div className="space-y-6">
                {study.results.map((result, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="text-3xl font-bold text-white mb-1">{result.value}</div>
                    <div className="text-sm text-slate-400">{result.metric}</div>
                    <div className="text-xs text-emerald-400 mt-1">{result.improvement} improvement</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="md:col-span-8 space-y-16">
              
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The Challenge</h2>
                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="text-lg">{study.challenge}</p>
                  <p>
                    The client was struggling to scale their operations efficiently. Manual processes were eating up valuable time, 
                    and potential leads were slipping through the cracks due to slow response times. They needed a solution that could 
                    automate their workflow without sacrificing personal touch.
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The Solution</h2>
                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="text-lg">{study.solution}</p>
                  <p className="mb-6">
                    We implemented a comprehensive digital strategy tailored to {study.client}'s specific needs. 
                    This involved a multi-faceted approach:
                  </p>
                  <ul className="space-y-4 list-none pl-0">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                      <span>
                        <strong>Strategic Planning:</strong> We analyzed their current market position and identified 
                        key opportunities for growth.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                      <span>
                        <strong>Technology Implementation:</strong> Deployed our BotomateX suite to automate 
                        lead capture and follow-ups.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                      <span>
                        <strong>Optimization:</strong> Continuous monitoring and A/B testing to maximize ROI 
                        and conversion rates.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-purple-500 pl-6 italic text-xl text-slate-600 dark:text-slate-300 py-2 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg">
                "DigiVibe didn't just provide a service; they became a partner in our growth. The results speak for themselves."
                <footer className="text-sm font-semibold not-italic mt-2 text-slate-900 dark:text-white">— {study.client} Team</footer>
              </blockquote>

            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Client Overview</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-slate-500 dark:text-slate-400">Client</dt>
                    <dd className="font-medium text-slate-900 dark:text-white">{study.client}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 dark:text-slate-400">Industry</dt>
                    <dd className="font-medium text-slate-900 dark:text-white">{study.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500 dark:text-slate-400">Services Used</dt>
                    <dd className="font-medium text-slate-900 dark:text-white">
                      {study.services.join(", ")}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl p-6 text-white text-center">
                <h3 className="font-bold text-lg mb-2">Ready for similar results?</h3>
                <p className="text-white/80 text-sm mb-6">Let's discuss how we can help your business grow.</p>
                <Link href="/contact">
                  <span className="block w-full py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                    Get Free Consult
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedStudies.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white text-center">More Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedStudies.map((related) => (
                <Link key={related.id} href={`/case-studies/${related.id}`}>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-all cursor-pointer group">
                    <div className="text-xs font-semibold text-purple-500 mb-2 uppercase tracking-wider">{related.industry}</div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors">{related.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{related.challenge}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-600">
                      Read Story <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}

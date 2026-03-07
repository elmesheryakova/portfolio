export default function ExecutiveSummary() {
  return (
    <section id="summary" aria-labelledby="summary-heading" className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        <div>
          <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-3">
            О себе
          </p>
          <h2
            id="summary-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-8"
          >
            Руководитель, который превращает сложность в предсказуемый результат
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Управляю кросс-функциональными командами (разработка, QA, hardware) и выстраиваю процессы так, чтобы идеи стабильно превращались в работающие продукты. Мой опыт - на стыке engineering, operations и бизнеса. Руководила разработкой промышленной платформы (закрытый контур АЭС). Участвовала в масштабировании продукта от MVP до тиражируемого решения. Выстраивала процессы разработки, QA, внедрения и работы с подрядчиками.  <br className="hidden sm:block" />  Сохраняю
            техническую насмотренность, участвую в архитектурных обсуждениях, помогаю команде находить сбалансированные решения. Верю, что хороший результат - это когда команда работает в устойчивом ритме, стейкхолдеры понимают друг друга, а ценность доходит до пользователя без лишних потерь.
          </p>
        </div>
      </div>
    </section>
  );
}

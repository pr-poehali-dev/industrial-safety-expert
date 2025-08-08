import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Shield",
      title: "Экспертиза промышленной безопасности",
      description: "Комплексная оценка безопасности опасных производственных объектов",
    },
    {
      icon: "FileText",
      title: "Экспертиза проектной документации",
      description: "Анализ документации на техническое перевооружение ОПО",
    },
    {
      icon: "Settings",
      title: "Техническое диагностирование",
      description: "Оценка технического состояния оборудования и сооружений",
    },
    {
      icon: "Award",
      title: "Сертификация и лицензирование",
      description: "Получение необходимых разрешительных документов",
    },
  ];

  const licenses = [
    { number: "№ 77-ЭБ-001234", type: "Экспертиза промышленной безопасности" },
    { number: "№ 77-ТД-005678", type: "Техническое диагностирование" },
    { number: "№ СРО-П-901-23456", type: "Проектные работы" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">ЭкспертПром</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground hover:text-primary">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary">Услуги</a>
              <a href="#about" className="text-foreground hover:text-primary">О компании</a>
              <a href="#licenses" className="text-foreground hover:text-primary">Лицензии</a>
              <a href="#contact" className="text-foreground hover:text-primary">Контакты</a>
            </div>
            <Button>Заказать экспертизу</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Экспертиза промышленной безопасности
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Профессиональные услуги по проведению экспертизы документации 
                на техническое перевооружение опасных производственных объектов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e59750bd-4126-405e-b1d8-a4877e2757c7.jpg" 
                alt="Промышленный объект"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">
              Полный комплекс услуг по обеспечению промышленной безопасности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании</h2>
              <p className="text-muted-foreground mb-6">
                ЭкспертПром — динамично развивающаяся компания в области экспертизы промышленной безопасности. 
                Мы гарантируем привлечение только квалифицированных специалистов с соответствующими 
                лицензиями и аттестациями для каждого проекта.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Квалифицированные эксперты</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Техническая поддержка</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Гибкий</div>
                  <div className="text-sm text-muted-foreground">Подход к задачам</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Полная</div>
                  <div className="text-sm text-muted-foreground">Ответственность</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Target" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Наша миссия</h3>
                      <p className="text-muted-foreground text-sm">
                        Обеспечение максимального уровня промышленной безопасности 
                        через качественную экспертизу и профессиональный подход
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="Eye" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Наше видение</h3>
                      <p className="text-muted-foreground text-sm">
                        Стать лидером в области экспертизы промышленной безопасности 
                        и эталоном качества услуг в отрасли
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section id="licenses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Лицензии и сертификаты</h2>
            <p className="text-muted-foreground">
              Все необходимые разрешения для проведения экспертных работ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {licenses.map((license, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{license.number}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{license.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span>г. Москва, ул. Промышленная, д. 15, офис 301</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <span>info@expertprom.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <span>Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Получить консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    placeholder="Имя" 
                    className="p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <input 
                    placeholder="Телефон" 
                    className="p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <input 
                  placeholder="Email" 
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <textarea 
                  placeholder="Сообщение" 
                  rows={4}
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
                <Button className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ЭкспертПром</h3>
              <p className="text-sm opacity-80">
                Профессиональная экспертиза промышленной безопасности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Экспертиза ПБ</li>
                <li>Техническое диагностирование</li>
                <li>Проектная документация</li>
                <li>Лицензирование</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О компании</li>
                <li>Лицензии</li>
                <li>Контакты</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@expertprom.ru</li>
                <li>г. Москва, ул. Промышленная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 ЭкспертПром. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
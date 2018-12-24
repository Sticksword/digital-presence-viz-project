export default function() {
  // Add your transitions here, like:
  // this.transition(
  //   this.fromRoute('people.index'),
  //   this.toRoute('people.detail'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );

  this.transition(
    this.hasClass('band-description'),
    this.toValue(true),
    this.use('toLeft', { duration: 500 })
  );

  this.transition(
    this.hasClass('carousel'),
    this.fromValue(0),
    this.toValue(1),
    this.use('toLeft', { duration: 500 })
  );

  this.transition(
    this.hasClass('carousel'),
    this.fromValue(1),
    this.toValue(2),
    this.use('toLeft', { duration: 500 })
  );

  this.transition(
    this.hasClass('carousel'),
    this.fromValue(2),
    this.toValue(1),
    this.use('toRight', { duration: 500 })
  );

  this.transition(
    this.hasClass('carousel'),
    this.fromValue(1),
    this.toValue(0),
    this.use('toRight', { duration: 500 })
  );
}
